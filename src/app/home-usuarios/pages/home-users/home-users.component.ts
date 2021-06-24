import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface sidebarOptions {
  titulo: string;
  ruta: string;
  icon: string;
}

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css'],
})
export class HomeUsersComponent implements OnInit {
  hidden = false;
  usuario = JSON.parse(sessionStorage.getItem('user')!);
  nombreUsuario = this.usuario.nombre;
  apellidoUsuario = this.usuario.apellido;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.nombreUsuario);
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

  sidebarOpts: sidebarOptions[] = [
    {
      ruta: '/home/estacionamientos',
      titulo: 'Estacionamientos',
      icon: 'fa-solid fa-square-parking',
    },
    {
      ruta: '/home/mis-estacionamientos',
      titulo: 'Mis estacionamientos',
      icon: 'fa-solid fa-square-parking',
    },
    {
      ruta: '/home/agregar-estacionamiento',
      titulo: 'Agregar estacionamiento',
      icon: 'fa-solid fa-square-parking',
    },
    {
      ruta: '/home/metodo-pago',
      titulo: 'Metodo de pago',
      icon: 'fa-solid fa-square-parking',
    },
  ];
}
