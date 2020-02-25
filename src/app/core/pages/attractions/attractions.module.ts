import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared/modules/material.module';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { AttractionsComponent } from './attractions.component';
import { SharedModule } from '@shared/modules/shared.module';

@NgModule({
  declarations: [
    AttractionsComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class AttractionsModule { }
