import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _user!: User;

  get usuario() {
    return { ...this._user };
  }
  constructor(private http: HttpClient) {}

  login(correo: string, password: string) {
    const url = `${environment.baseUrl}auth/login`;

    const body = { correo, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          sessionStorage.setItem('token', resp.token);
          this._user = {
            nombre: resp.usuario.nombre,
            uid: resp.usuario.uid,
            apellido: resp.usuario.apellido,
            comuna: resp.usuario.comuna,
            correo: resp.usuario.correo,
            direccion: resp.usuario.direccion,
            estado: resp.usuario.estado,
            role: resp.usuario.role,
          };
          sessionStorage.setItem('user', JSON.stringify(this._user));
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${environment.baseUrl}auth/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }
}
