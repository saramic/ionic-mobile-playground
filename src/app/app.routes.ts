import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'naughts-and-crosses',
    loadComponent: () => import('./naughts-and-crosses/naughts-and-crosses.page').then( m => m.NaughtsAndCrossesPage)
  },
  {
    path: 'ten-thirty-five',
    loadComponent: () => import('./ten-thirty-five/ten-thirty-five.page').then( m => m.TenThirtyFivePage)
  },
];
