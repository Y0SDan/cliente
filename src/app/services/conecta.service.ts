import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ConectaService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/contacto/mostrarContactos`);
  }
  create(contacto: any) {
    return this.http.post(`${environment.API_URI}/contacto/crearContacto`, contacto);
  }
}
