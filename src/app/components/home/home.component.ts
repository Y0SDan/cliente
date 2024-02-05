import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel.carousel-slider').carousel({
      //fullWidth: true,
      //fullheight: true,
      indicators: false, //muestra los puntos indicadores
      duration: 300 //velocidad de transición
    });

    setInterval(function(){
      $('.carousel.carousel-slider').carousel('next');
    }, 5000); //5000 ->cada 5 segundos

    $(document).ready(function(){
      $('.parallax').parallax();

      let carousel = document.querySelector('.carousel.carousel-slider.center') as HTMLElement;
      let height = carousel.offsetHeight;
      let width = carousel.offsetWidth;
      console.log("La altura de mi carousel es:",height);
      console.log("El ancho de mi carousel es:",width);
    });
    
  }
}


