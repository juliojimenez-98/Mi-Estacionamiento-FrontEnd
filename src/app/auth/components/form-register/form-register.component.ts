import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  user: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    comuna: '',
    direccion: '',
    departamento: '',
  };

  constructor(private service: RegisterService) {}
  get Comunas() {
    return this.service.Comunas;
  }

  onSubmit() {
    console.log(this.user);
  }

  ngOnInit(): void {
    this.service.getComunas();
  }
}
