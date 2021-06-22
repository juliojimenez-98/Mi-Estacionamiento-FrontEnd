import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { FormLoginComponent } from './auth/components/form-login/form-login.component';
import { FormRegisterComponent } from './auth/components/form-register/form-register.component';
import { HomeUsersComponent } from './home-usuarios/pages/home-users/home-users.component';
import { SidebarComponent } from './home-usuarios/components/sidebar/sidebar.component';
import { TopbarComponent } from './home-usuarios/components/topbar/topbar.component';
import { AgregarEstacionamientosComponent } from './home-usuarios/pages/agregar-estacionamientos/agregar-estacionamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormLoginComponent,
    FormRegisterComponent,
    HomeUsersComponent,
    SidebarComponent,
    TopbarComponent,
    AgregarEstacionamientosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
