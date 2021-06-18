import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private urlLogin = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  signIn(correo: string, password: string) {
    const raw = { correo, password };
    console.log(raw);

    return this.http.post(`${this.urlLogin}`, raw);
  }
}
