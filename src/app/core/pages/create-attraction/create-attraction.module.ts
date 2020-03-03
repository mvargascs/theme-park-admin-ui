import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { CreateAttractionRoutingModule } from './create-attraction-routing.module';
import { CreateAttractionComponent } from './create-attraction.component';

@NgModule({
  declarations: [
    CreateAttractionComponent
  ],
  imports: [
    CommonModule,
    CreateAttractionRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class CreateAttractionModule { }
