import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@shared/guards/auth.guard';

import { AttractionComponent } from './attraction.component';

const routes: Routes = [
  { path: '', component: AttractionComponent, canActivate: [AuthGuard] },
  { path: ':id', component: AttractionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionRoutingModule { }
