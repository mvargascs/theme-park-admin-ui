import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAttractionComponent } from './create-attraction.component';

const routes: Routes = [{ path: '', component: CreateAttractionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAttractionRoutingModule { }
