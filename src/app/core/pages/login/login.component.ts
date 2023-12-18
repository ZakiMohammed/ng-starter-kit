import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MESSAGE_CONSTANTS } from '../../constants/message.constant';
import { LoaderService } from '../../services/loader.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private loaderService: LoaderService,
    private authService: AuthService,
  ) {}

  login() {
    if (!this.username || !this.password) {
      this.toastrService.error(MESSAGE_CONSTANTS.REQUIRED_CREDENTIALS);
      return;
    }

    this.loaderService.show();
    this.authService.login(this.username, this.password).subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.toastrService.error(MESSAGE_CONSTANTS.INVALID_CREDENTIALS);
      }
      this.loaderService.hide();
    });
  }
}
