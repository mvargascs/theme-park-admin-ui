import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { TimestampPipe } from '@shared/pipe/timestamp.pipe';

import { AttractionFormComponent } from '@shared/components/attraction-form/attraction-form.component';

@NgModule({
  declarations: [
    TimestampPipe,
    AttractionFormComponent
  ],
  exports: [
    TimestampPipe,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
