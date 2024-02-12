import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AdministradorService } from '../../services/administrador.service';
import { Contacto } from "../../models/Contacto"
import { Administrador } from 'src/app/models/Administrador';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  administrador = new Administrador();
  errorMessage: string = ''; // Añade esta línea

  constructor(private loginService: LoginService, private router: Router) {
  }

  logueo() {
    this.loginService.login(this.administrador.correo, this.administrador.contrasena).subscribe(
      (resadministrador: any) => {
        if (resadministrador && resadministrador.id) {
          localStorage.setItem('correo', resadministrador.correo);
          localStorage.setItem('contrasena', resadministrador.contrasena);
          this.router.navigate(['/administrador']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      err => {
        console.error(err);
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }
  ngOnInit(): void {
    
  }
}
