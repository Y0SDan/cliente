import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Contacto } from "../../models/Contacto"
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contacto = new Contacto();
  contactos: Contacto[] = [];

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.list().subscribe((rescontacto: any) => {
      this.contacto = rescontacto;
      console.log(rescontacto);
    },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    
  }
}
