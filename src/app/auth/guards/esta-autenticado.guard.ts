import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class EstaAutenticadoGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    return this.loginService.validarToken().pipe(
      tap((valid) => {
        if (!valid) {
          Swal.fire('Inicia Sesión', 'No estás autenticado', 'warning');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
