import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { AttractionsComponent } from './attractions.component';

@NgModule({
  declarations: [
    AttractionsComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AttractionsModule { }
