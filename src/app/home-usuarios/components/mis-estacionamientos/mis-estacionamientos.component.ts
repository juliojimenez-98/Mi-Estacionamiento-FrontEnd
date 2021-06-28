import { Component, OnInit } from '@angular/core';
import { Estacionamiento } from '../../models/estacionamiento';
import { EstacionamientosService } from '../../services/estacionamientos.service';

@Component({
  selector: 'app-mis-estacionamientos',
  templateUrl: './mis-estacionamientos.component.html',
  styleUrls: ['./mis-estacionamientos.component.css'],
})
export class MisEstacionamientosComponent implements OnInit {
  estacionamientos: Estacionamiento[] = [];
  user = JSON.parse(sessionStorage.getItem('user')!);
  id = this.user.uid;
  constructor(private service: EstacionamientosService) {}

  ngOnInit(): void {
    this.obtenerMisEstacionamientos();
    console.log(this.id);
    console.log(this.user);
  }

  obtenerMisEstacionamientos() {
    this.service.obtenerMisEstacionamientos(this.id).subscribe((res) => {
      this.estacionamientos = res as Estacionamiento[];
      console.log(this.estacionamientos);
    });
  }
}
