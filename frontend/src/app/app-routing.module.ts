import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ProfileComponent } from './component/profile/profile.component';
import { CuentasComponent } from './component/cuentas/cuentas.component';
/** , canActivate: [ AuthGuardService ]*/
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [ AuthGuardService ] },
  { path: 'account', component: CuentasComponent , canActivate: [ AuthGuardService ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
