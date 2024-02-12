import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; // Import the environment variable

@Injectable({
  providedIn: 'root'
})
export class AdministradorService 
{
  constructor(private http: HttpClient) { }  // Inyecta HttpClient aquí
}
