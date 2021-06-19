import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public Comunas: any[] = [];
  private Url = 'http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient) {}

  getComunas() {
    const UrlApiComunas =
      'https://apis.digital.gob.cl/dpa/regiones/13/provincias/131/comunas';
    this.http.get(UrlApiComunas).subscribe((res: any) => {
      this.Comunas = res;
    });
  }

  crearUsuario(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.Url, user);
  }
}
