import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/modules/material.module';

import { TimestampPipe } from '@shared/pipe/timestamp.pipe';

import { AttractionFormComponent } from '@shared/components/attraction-form/attraction-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AttractionFormComponent,
    TimestampPipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    AttractionFormComponent,
    TimestampPipe,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
