import { Component, OnInit } from '@angular/core';
import { Estacionamiento } from '../../models/estacionamiento';
import { EstacionamientosService } from '../../services/estacionamientos.service';

@Component({
  selector: 'app-estacionamientos',
  templateUrl: './estacionamientos.component.html',
  styleUrls: ['./estacionamientos.component.css'],
})
export class EstacionamientosComponent implements OnInit {
  estacionamientos: Estacionamiento[] = [];
  constructor(private service: EstacionamientosService) {}

  ngOnInit(): void {
    this.obtenerEstacionamientos();
  }

  obtenerEstacionamientos() {
    this.service.obtenerEstacionamientos().subscribe((res) => {
      this.estacionamientos = res as Estacionamiento[];
    });
  }
}
