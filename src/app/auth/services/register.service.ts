import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public Comunas: any[] = [];
  constructor(private http: HttpClient) {}

  getHeroes() {
    const UrlApiComunas =
      'https://apis.digital.gob.cl/dpa/regiones/13/provincias/131/comunas';
    this.http.get(UrlApiComunas).subscribe((res: any) => {
      this.Comunas = res;
      console.log(this.Comunas);
    });
  }
}
