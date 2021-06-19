import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    role: 'USER_ROLE',
  };

  constructor(private service: RegisterService) {}
  get Comunas() {
    return this.service.Comunas;
  }

  onSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando usuario...',
    });
    Swal.showLoading();
    this.service.crearUsuario(this.user).subscribe((res) => {
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: `Gracias por unirte a nosotros ${this.user.nombre}`,
        footer: 'Ahora puedes iniciar sesion',
      });
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.service.getComunas();
  }
}
