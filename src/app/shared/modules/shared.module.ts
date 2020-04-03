import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@shared/modules/material.module';

import { AttractionFormComponent } from '@shared/components/forms/attraction-form/attraction-form.component';
import { LocationFormComponent } from '@shared/components/forms/location-form/location-form.component';
import { StatusFormComponent } from '@shared/components/forms/status-form/status-form.component';

import { BooleanToStringPipe } from '@shared/pipe/boolean-to-string.pipe';
import { TimestampToDatePipe } from '@shared/pipe/timestamp-to-date.pipe';

@NgModule({
  declarations: [
    AttractionFormComponent,
    LocationFormComponent,
    StatusFormComponent,
    BooleanToStringPipe,
    TimestampToDatePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    AttractionFormComponent,
    LocationFormComponent,
    StatusFormComponent,
    BooleanToStringPipe,
    TimestampToDatePipe,
  ]
})
export class SharedModule { }
