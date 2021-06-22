import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AgregarEstacionamientosComponent } from './home-usuarios/pages/agregar-estacionamientos/agregar-estacionamientos.component';
import { HomeUsersComponent } from './home-usuarios/pages/home-users/home-users.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'mapas',
    loadChildren: () =>
      import('./mapas/mapas.module').then((m) => m.MapasModule),
  },
  { path: 'home', component: HomeUsersComponent, children: [
    {
      path: 'agregar-estacionamiento',
      component: AgregarEstacionamientosComponent, }
    ],
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
