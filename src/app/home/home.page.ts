import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  instrumentos = [

{
  nombre: 'flauta',
  imagen: 'assets/imagenes/flauta.png',
  audio: 'assets/imagenes/flauta.mp3'
},

{
  nombre: 'bombo1',
  imagen: 'assets/imagenes/bombo1.png',
  audio: 'assets/imagenes/bombo1.mp3'
},

{
  nombre: 'bombo2',
  imagen: 'assets/imagenes/bombo2.png',
  audio: 'assets/imagenes/bombo2.mp3'
},


{
  nombre: 'platillos',
  imagen: 'assets/imagenes/platillos.png',
  audio: 'assets/imagenes/platillos.mp3'
}




  ];

}
