import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  conecta(){
    this.router.navigate(['/conecta']);
  }

}
