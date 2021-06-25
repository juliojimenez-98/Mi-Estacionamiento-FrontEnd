import { Component, OnInit } from '@angular/core';

 interface navbarItems{
  nombre:string;
  ruta:string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }

  navbarItems: navbarItems[]=[
    {nombre:'Inicio',ruta:'inicio'},
    {nombre:'Estacionamientos',ruta:'estacionamientos'},
    {nombre:'Quienes Somos',ruta:'quienes-somos'}
  ]

}
