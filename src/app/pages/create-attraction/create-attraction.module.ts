import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared/modules/material.module';

import { CreateAttractionRoutingModule } from './create-attraction-routing.module';
import { CreateAttractionComponent } from './create-attraction.component';

@NgModule({
  declarations: [CreateAttractionComponent],
  imports: [
    CommonModule,
    CreateAttractionRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class CreateAttractionModule { }
