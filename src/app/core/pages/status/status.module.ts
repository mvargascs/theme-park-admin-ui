import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class StatusModule { }

