import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { ImportAttractionsRoutingModule } from './import-attractions-routing.module';
import { ImportAttractionsComponent } from './import-attractions.component';

@NgModule({
  declarations: [
    ImportAttractionsComponent
  ],
  imports: [
    CommonModule,
    ImportAttractionsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ImportAttractionsModule { }
