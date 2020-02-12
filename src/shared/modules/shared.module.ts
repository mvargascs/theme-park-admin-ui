import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacingPipe } from '@shared/pipes/spacing.pipe';

@NgModule({
  declarations: [
    SpacingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpacingPipe,
  ]
})
export class SharedModule { }
