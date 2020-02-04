import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
