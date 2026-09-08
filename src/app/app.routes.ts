import { Routes } from '@angular/router';
import { ElementsHome } from './elements/elements-home/elements-home';
import { CollectionsHome } from './collections/collections-home/collections-home';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

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
  },
  { path: '**', loadComponent: () => import('./not-found/not-found').then((c) => c.NotFound) },
];
