import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/auth/services/register.service';
import Swal from 'sweetalert2';
import { Estacionamiento } from '../../models/estacionamiento';
import { EstacionamientosService } from '../../services/estacionamientos.service';

@Component({
  selector: 'app-agregar-estacionamientos',
  templateUrl: './agregar-estacionamientos.component.html',
  styleUrls: ['./agregar-estacionamientos.component.css'],
})
export class AgregarEstacionamientosComponent implements OnInit {
  marcadoresStorage = false;

  lat = JSON.parse(localStorage.getItem('marcadores')!);

  estacionamiento: Estacionamiento = {
    titulo: '',
    descripcion: '',
    latitud: this.lat ? this.lat[0].centro[1] : null,
    longitud: this.lat ? this.lat[0].centro[0] : null,
    direccion: '',
    comuna: '',
  };

  constructor(
    private service: RegisterService,
    private estacionamientoService: EstacionamientosService,
    private router: Router
  ) {
    if (localStorage.getItem('marcadores')) {
      this.marcadoresStorage = true;
    } else {
      this.marcadoresStorage = false;
    }
  }

  agregarEstacionamiento() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando usuario...',
    });
    Swal.showLoading();
    this.estacionamientoService
      .crearEstacionamiento(this.estacionamiento)
      .subscribe((res) => {
        localStorage.removeItem('marcadores');

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Estacionamiento creado',
          text: `Se ha agregado el estacionamiento ${this.estacionamiento.titulo}`,
        });
        console.log(res);
        this.router.navigateByUrl('/home/estacionamientos');
      });
  }

  get Comunas() {
    return this.service.Comunas;
  }
  ngOnInit(): void {
    this.service.getComunas();
  }

  agregarMarcador() {
    localStorage.removeItem('marcadores');
  }
}
