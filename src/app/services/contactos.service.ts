import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  agregar(name: string, email: string, message: string) {
    console.log(`Nombre: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${message}`);
    const body = { name, email, message };
    this.http.post(`${environment.API_URI}/contacto/crearContacto`, body)
      .subscribe(
        response => {
          console.log('La consulta fue ejecutada con éxito', response);
        },
        error => {
          console.error('Hubo un error al ejecutar la consulta', error);
        }
      );
  }
}