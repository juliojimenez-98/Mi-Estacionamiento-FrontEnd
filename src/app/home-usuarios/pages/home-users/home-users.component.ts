import { Component, OnInit } from '@angular/core';

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
  hidden = true;
  constructor() {}

  ngOnInit(): void {}
  sidebarOpts: sidebarOptions[] = [
    {
      ruta: '/home/estacionamientos',
      titulo: 'Estacionamientos',
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
