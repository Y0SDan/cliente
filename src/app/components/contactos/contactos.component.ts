import { Component, OnInit } from '@angular/core';
import { Contacto } from "../../models/Contacto"
import { ContactosService } from '../../services/contactos.service'; // Asegúrate de importar tu servicio

declare var $: any;

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contacto = new Contacto();

  // Inyecta el servicio en el constructor
  constructor(private contactosService: ContactosService) { }

  agregarContacto() {

    // Llama al método del servicio
    this.contactosService.agregar(this.contacto.name, this.contacto.email, this.contacto.message);
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }
}