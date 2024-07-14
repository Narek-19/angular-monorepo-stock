import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'article-details/:id',
    loadChildren: () =>
      import('article-details/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'symbol-news',
    loadChildren: () =>
      import('symbol-news/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'market-news',
    loadChildren: () =>
      import('market-news/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'symbol-news',
  },
];
