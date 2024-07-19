import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png'
  products:  Product[] =[
    {
      id: '1',
      nombre: 'producto1',
      precio: 20,
      image: '../../../assets/images/default.png'
    },
    {
      id: '2',
      nombre: 'producto2',
      precio: 30,
      image: '../../../assets/images/default.png'
    },
    {
      id: '3',
      nombre: 'producto3',
      precio: 40,
      image: '../../../assets/images/default.png'
    } 
  ]
  onLoaded(img: string){
    console.log('padre',img);
  }

}
