import { Routes } from '@angular/router';
import { ElementsHome } from './elements/elements-home/elements-home';
import { CollectionsHome } from './collections/collections-home/collections-home';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Biography } from './collections/biography/biography';
import { Companies } from './collections/companies/companies';
import { Partners } from './collections/partners/partners';
import { ViewsHome } from './views/views-home/views-home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'elements',
    loadComponent: () =>
      import('./elements/elements-home/elements-home').then((c) => c.ElementsHome),
  },
  {
    path: 'collections',
    loadComponent: () =>
      import('./collections/collections-home/collections-home').then((c) => c.CollectionsHome),
    children: [
      { path: '', component: Biography },
      { path: 'companies', component: Companies },
      { path: 'partners', component: Partners },
    ],
  },
  {
    path: 'views',
    loadComponent: () => import('./views/views-home/views-home').then((c) => c.ViewsHome),
  },
  { path: '**', loadComponent: () => import('./not-found/not-found').then((c) => c.NotFound) },
];
