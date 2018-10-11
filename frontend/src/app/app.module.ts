import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService,
} from 'angular-6-social-login';
import { ProfileComponent } from './component/profile/profile.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('2060606834252509')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('294973461759-38t4n0em1pa815itio2tklrp47fea1ik.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService,
    AuthService,
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
