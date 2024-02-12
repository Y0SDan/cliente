import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar', { static: false }) navbar!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { // Se ejecuta despues de que la vista se haya cargado (para saber el tamaño de la barra de navegacion)
    let width = this.navbar.nativeElement.offsetWidth;
    let height = this.navbar.nativeElement.offsetHeight;
    console.log('Width: ', width);
    console.log('Height: ', height);
  }

  logout(){
    console.log("Cerrando sesion");
    localStorage.removeItem("id_Rol")
    localStorage.removeItem("correo")
    this.router.navigateByUrl('');
  }

  contacto(){
    this.router.navigate(['/contacto']);
  }
  galeria(){
    this.router.navigate(['/galeria']);
  }
}
