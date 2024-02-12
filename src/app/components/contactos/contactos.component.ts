import { Component, OnInit } from '@angular/core';
import { Contacto } from "../../models/Contacto"
import { ContactosService } from '../../services/contactos.service'; // Asegúrate de importar tu servicio

declare var M: any; // Declara M para usar Materialize CSS

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
    var instance = M.Modal.getInstance(document.getElementById('modal1'));
    instance.open();
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  }
}