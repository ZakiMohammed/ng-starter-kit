import { Routes } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./core/pages/login/login.component').then((x) => x.LoginComponent),
  },
  {
    path: '',
    component: ShellComponent,
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
