import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class LocationsModule { }
