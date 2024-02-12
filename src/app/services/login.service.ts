import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/administrador/mostrarAdministradores`);
  }
  login(correo: string, contrasena: string) {
    const body = { correo, contrasena };
    return this.http.post(`${environment.API_URI}/administrador/loginAdministrador`, body);
  }
}
