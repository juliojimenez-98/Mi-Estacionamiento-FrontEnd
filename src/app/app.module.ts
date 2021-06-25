import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { FormLoginComponent } from './auth/components/form-login/form-login.component';
import { FormRegisterComponent } from './auth/components/form-register/form-register.component';
import { HomeUsersComponent } from './home-usuarios/pages/home-users/home-users.component';
import { AgregarEstacionamientosComponent } from './home-usuarios/pages/agregar-estacionamientos/agregar-estacionamientos.component';
import { EstacionamientosComponent } from './home-usuarios/components/estacionamientos/estacionamientos.component';
import { MisEstacionamientosComponent } from './home-usuarios/components/mis-estacionamientos/mis-estacionamientos.component';
import { MiniMapaComponent } from './home-usuarios/components/mini-mapa/mini-mapa.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { InicioComponent } from './home/components/inicio/inicio.component';
import { NavbarComponent } from './home/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormLoginComponent,
    FormRegisterComponent,
    HomeUsersComponent,
    AgregarEstacionamientosComponent,
    EstacionamientosComponent,
    MisEstacionamientosComponent,
    MiniMapaComponent,
    HomePageComponent,
    InicioComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
