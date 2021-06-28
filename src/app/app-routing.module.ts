import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstaAutenticadoGuard } from './auth/guards/esta-autenticado.guard';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { EstacionamientosComponent } from './home-usuarios/components/estacionamientos/estacionamientos.component';
import { MisEstacionamientosComponent } from './home-usuarios/components/mis-estacionamientos/mis-estacionamientos.component';
import { AgregarEstacionamientosComponent } from './home-usuarios/pages/agregar-estacionamientos/agregar-estacionamientos.component';
import { HomeUsersComponent } from './home-usuarios/pages/home-users/home-users.component';
import { InicioComponent } from './home/components/inicio/inicio.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [{ path: 'inicio', component: InicioComponent }],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'mapas',
    loadChildren: () =>
      import('./mapas/mapas.module').then((m) => m.MapasModule),
  },
  {
    path: 'home',
    component: HomeUsersComponent,
    children: [
      {
        path: 'agregar-estacionamiento',
        component: AgregarEstacionamientosComponent,
      },
      {
        path: 'estacionamientos',
        component: EstacionamientosComponent,
      },
      {
        path: 'mis-estacionamientos',
        component: MisEstacionamientosComponent,
      },
    ],
    canActivate: [EstaAutenticadoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
