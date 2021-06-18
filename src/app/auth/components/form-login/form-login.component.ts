import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  singIn(correo: string, password: string, event: Event) {
    event.preventDefault();
    event.preventDefault();
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Iniciando sesión...',
    });
    Swal.showLoading();
    this.loginService.signIn(correo, password).subscribe(
      (res) => {
        Swal.close();
        console.log(correo, password);
        console.log(res);
      },
      (error) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${
            error.error.msg
              ? undefined
              : 'Error del servidor intenta un rato mas tarde'
          }`,
        });
        console.log(error.error.msg);
      }
    );
  }
}
