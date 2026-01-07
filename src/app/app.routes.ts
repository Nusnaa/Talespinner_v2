import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadComponent: () => import('./overview/overview').then((m) => m.Overview) },
  {
    path: 'skills/melee/armour',
    loadComponent: () =>
      import('./book/character-creation/skills/melee/armour/armour').then((m) => m.Armour),
  },
];
