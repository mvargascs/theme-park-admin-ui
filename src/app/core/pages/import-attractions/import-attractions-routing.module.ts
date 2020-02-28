import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

import { ImportAttractionsComponent } from './import-attractions.component';

const routes: Routes = [{ path: '', component: ImportAttractionsComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportAttractionsRoutingModule { }
