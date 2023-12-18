import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { MESSAGE_CONSTANTS } from '../constants/message.constant';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastService = inject(ToastrService);

  let clonedReq = req;

  if (authService.User) {
    const user = {
      id: authService.User.id,
      username: authService.User.username,
      email: authService.User.email,
    };
    clonedReq = req.clone({
      setHeaders: {
        'X-User': JSON.stringify(user),
      },
    });
  }

  return next(clonedReq).pipe(catchError((err) => handleAuthError(err, authService, toastService)));
};

const handleAuthError = (err: HttpErrorResponse, authService: AuthService, toastService: ToastrService) => {
  if (err instanceof HttpErrorResponse) {
    if (err.status === HttpStatusCode.Unauthorized) {
      if (!err.url?.includes('login')) {
        toastService.show(MESSAGE_CONSTANTS.SESSION_EXPIRED);
        authService.logout();
      }
    } else {
      toastService.error(MESSAGE_CONSTANTS.GLOBAL_ERROR);
    }
  }
  return throwError(() => err);
};
