import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [AuthGuard] },
  { path: 'attractions', loadChildren: () => import('./pages/attractions/attractions.module').then(m => m.AttractionsModule), canLoad: [AuthGuard] },
  { path: 'create-attraction', loadChildren: () => import('./pages/create-attraction/create-attraction.module').then(m => m.CreateAttractionModule), canLoad: [AuthGuard] },
  { path: 'import-attractions', loadChildren: () => import('./pages/import-attractions/import-attractions.module').then(m => m.ImportAttractionsModule), canLoad: [AuthGuard] },
  { path: 'locations', loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule), canLoad: [AuthGuard] },
  { path: 'create-location', loadChildren: () => import('./pages/create-location/create-location.module').then(m => m.CreateLocationModule), canLoad: [AuthGuard] },
  { path: 'statuses', loadChildren: () => import('./pages/statuses/statuses.module').then(m => m.StatusesModule), canLoad: [AuthGuard] },
  { path: 'create-status', loadChildren: () => import('./pages/create-status/create-status.module').then(m => m.CreateStatusModule), canLoad: [AuthGuard] },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
