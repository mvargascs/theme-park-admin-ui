import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/modules/material.module';

import { AttractionFormComponent } from '@shared/components/attraction-form/attraction-form.component';

import { BooleanToStringPipe } from '@shared/pipe/boolean-to-string.pipe';
import { TimestampToDatePipe } from '@shared/pipe/timestamp-to-date.pipe';

@NgModule({
  declarations: [
    AttractionFormComponent,
    BooleanToStringPipe,
    TimestampToDatePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    AttractionFormComponent,
    BooleanToStringPipe,
    TimestampToDatePipe,
  ]
})
export class SharedModule { }
