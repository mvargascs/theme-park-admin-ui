import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

import { CreateAttractionComponent } from './create-attraction.component';

const routes: Routes = [{ path: '', component: CreateAttractionComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAttractionRoutingModule { }
