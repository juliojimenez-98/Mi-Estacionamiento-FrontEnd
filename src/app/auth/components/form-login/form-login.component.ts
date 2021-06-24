import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  formLogin: FormGroup = this.fb.group({
    correo: [
      sessionStorage.getItem('correoGuardado')
        ? sessionStorage.getItem('correoGuardado')
        : '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  recuerdame = false;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  recordarCorreo() {
    this.recuerdame = true;
    const { correo } = this.formLogin.value;
    sessionStorage.setItem('correoGuardado', correo);
  }

  login() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Iniciando sesión...',
      showConfirmButton: false,
    });
    const { correo, password } = this.formLogin.value;
    this.loginService.login(correo, password).subscribe((ok) => {
      console.log(ok);
      if (ok === true) {
        Swal.close();
        this.router.navigateByUrl('/home/estacionamiento');
      } else {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ok,
        });
      }
    });
  }
  //   event.preventDefault();
  //   Swal.fire({
  //     allowOutsideClick: false,
  //     icon: 'info',
  //     text: 'Iniciando sesión...',
  //   });
  //   Swal.showLoading();
  //   this.loginService.signIn(correo, password).subscribe(
  //     (res) => {
  //       console.log(res);
  //       Swal.close();
  //       // sessionStorage.setItem('usuario', res[usuario]);
  //       console.log(correo, password);
  //     },
  //     (error) => {
  //       Swal.close();
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: `${
  //           error.error.msg
  //             ? undefined
  //             : 'Error del servidor intenta un rato mas tarde'
  //         }`,
  //       });
  //       console.log(error.error.msg);
  //     }
  //   );
  // }
}
