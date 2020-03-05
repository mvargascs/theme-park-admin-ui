import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [{ path: '', component: LoginComponent, resolve: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
