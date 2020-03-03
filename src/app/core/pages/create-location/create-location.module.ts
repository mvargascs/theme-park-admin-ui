import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { CreateLocationRoutingModule } from './create-location-routing.module';
import { CreateLocationComponent } from './create-location.component';

@NgModule({
  declarations: [
    CreateLocationComponent
  ],
  imports: [
    CommonModule,
    CreateLocationRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class CreateLocationModule { }
