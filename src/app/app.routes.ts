import { Routes } from '@angular/router';
import { ElementsHome } from './elements/elements-home/elements-home';
import { CollectionsHome } from './collections/collections-home/collections-home';

export const routes: Routes = [
  { path: 'elements', component: ElementsHome },
  { path: 'collections', component: CollectionsHome },
];
