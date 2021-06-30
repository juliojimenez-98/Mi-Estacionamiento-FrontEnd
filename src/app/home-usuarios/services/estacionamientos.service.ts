import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  obtenerEstacionamientos(): Observable<any> {
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );
    return this.http
      .get(`${environment.baseUrl}estacionamientos`, {
        headers,
      })
      .pipe(map((res: any) => res.estacionamientos as Estacionamiento[]));
  }

  obtenerMisEstacionamientos(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );
    return this.http
      .get(`${environment.baseUrl}buscar/mis-estacionamientos/${id}`, {
        headers,
      })
      .pipe(map((res: any) => res.results as Estacionamiento[]));
  }

  obtenerEstacionamientoById(id: string): Observable<Estacionamiento> {
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );
    return this.http.get<Estacionamiento>(
      `${environment.baseUrl}estacionamientos/${id}`,
      {
        headers,
      }
    );
  }

  updateEstacionamiento(
    estacionamiento: Estacionamiento
  ): Observable<Estacionamiento> {
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );
    return this.http.put<Estacionamiento>(
      `${environment.baseUrl}estacionamientos/${estacionamiento._id}`,
      estacionamiento,
      {
        headers,
      }
    );
  }
}
