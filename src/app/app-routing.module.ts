import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'attractions', loadChildren: () => import('./pages/attractions/attractions.module').then(m => m.AttractionsModule) },
  { path: 'create-attraction', loadChildren: () => import('./pages/create-attraction/create-attraction.module').then(m => m.CreateAttractionModule) },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
