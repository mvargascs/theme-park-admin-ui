import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { AttractionRoutingModule } from './attraction-routing.module';
import { AttractionComponent } from './attraction.component';

@NgModule({
  declarations: [
    AttractionComponent
  ],
  imports: [
    CommonModule,
    AttractionRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AttractionModule { }
