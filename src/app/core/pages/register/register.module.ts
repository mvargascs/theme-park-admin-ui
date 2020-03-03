import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/modules/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class RegisterModule { }
