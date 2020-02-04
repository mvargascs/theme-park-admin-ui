import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared/modules/material.module';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { AttractionsComponent } from './attractions.component';


@NgModule({
  declarations: [AttractionsComponent],
  imports: [
    CommonModule,
    AttractionsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class AttractionsModule { }
