import { Routes } from '@angular/router';
import { ElementsHome } from './elements/elements-home/elements-home';
import { CollectionsHome } from './collections/collections-home/collections-home';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'elements', component: ElementsHome },
  { path: 'collections', component: CollectionsHome },
  { path: '**', component: NotFound},
];
