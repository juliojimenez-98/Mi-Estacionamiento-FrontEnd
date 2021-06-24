import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estacionamiento } from '../models/estacionamiento';

@Injectable({
  providedIn: 'root',
})
export class EstacionamientosService {
  constructor(private http: HttpClient) {}

  crearEstacionamiento(
    estacionamiento: Estacionamiento
  ): Observable<Estacionamiento> {
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );
    return this.http.post<Estacionamiento>(
      `${environment.baseUrl}estacionamientos`,
      estacionamiento,
      { headers }
    );
  }
}
