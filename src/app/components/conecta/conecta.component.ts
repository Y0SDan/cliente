import { Component, OnInit } from '@angular/core';
import { ConectaService } from '../../services/conecta.service';
import { Contacto } from "../../models/Contacto"
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent implements OnInit {
  contactos: Contacto[] = [];
  contacto : Contacto = new Contacto();

  constructor(private conectaService: ConectaService, private router: Router) {
  }

  ngOnInit(): void {
    this.conectaService.list().subscribe((rescontacto: any) => {
      this.contactos = rescontacto;
      console.log(rescontacto);
    },
      err => console.error(err)
    );

    $(document).ready(function(){
      $('.carousel').carousel();
    }); 

  }
  
}
