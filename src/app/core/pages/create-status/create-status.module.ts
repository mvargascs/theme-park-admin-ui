import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { CreateStatusRoutingModule } from './create-status-routing.module';
import { CreateStatusComponent } from './create-status.component';

@NgModule({
  declarations: [
    CreateStatusComponent
  ],
  imports: [
    CommonModule,
    CreateStatusRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class CreateStatusModule { }
