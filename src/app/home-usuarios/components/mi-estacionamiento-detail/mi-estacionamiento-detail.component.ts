import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Estacionamiento } from '../../models/estacionamiento';
import { EstacionamientosService } from '../../services/estacionamientos.service';

@Component({
  selector: 'app-mi-estacionamiento-detail',
  templateUrl: './mi-estacionamiento-detail.component.html',
  styleUrls: ['./mi-estacionamiento-detail.component.css'],
})
export class MiEstacionamientoDetailComponent implements OnInit {
  estacionamiento: Estacionamiento = {
    titulo: '',
    descripcion: '',
    latitud: 0,
    longitud: 0,
    direccion: '',
    comuna: '',
  };
  constructor(
    private service: EstacionamientosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDatosForm();
  }
  cargarDatosForm() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.service.obtenerEstacionamientoById(id).subscribe((res) => {
          this.estacionamiento = res;
        });
      }
    });
  }

  updateEstacionamiento() {
    this.service
      .updateEstacionamiento(this.estacionamiento)
      .subscribe((res) => {
        console.log(this.estacionamiento);
        console.log('respuesta', res);
        Swal.fire(
          'Estacionamiento actualizado',
          `Estacionamiento ${res.titulo} actualizado con exito`,
          'success'
        );
        this.router.navigateByUrl('/home/mis-estacionamientos');
      });
  }
}
