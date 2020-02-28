import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class CreateStatusModule { }
