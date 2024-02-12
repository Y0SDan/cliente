import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }
  acerca_de(){
    this.router.navigate(['/acerca-de']);
  }
  faq(){
    this.router.navigate(['/faq']);
  }

}
