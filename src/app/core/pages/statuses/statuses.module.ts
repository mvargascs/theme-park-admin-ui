import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { StatusesRoutingModule } from './statuses-routing.module';
import { StatusesComponent } from './statuses.component';

@NgModule({
  declarations: [
    StatusesComponent
  ],
  imports: [
    CommonModule,
    StatusesRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class StatusesModule { }
