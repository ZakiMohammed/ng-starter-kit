import { Routes } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';
import { loginGuard } from './core/guards/login.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./core/pages/login/login.component').then((x) => x.LoginComponent),
    canActivate: [loginGuard],
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./core/pages/home/home.component').then((x) => x.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./core/pages/about/about.component').then((x) => x.AboutComponent),
      },
      {
        path: '**',
        loadComponent: () => import('./core/pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
      },
    ],
  },
];
