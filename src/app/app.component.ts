import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png'
  showImage = true;

  onLoaded(img: string){
    console.log('padre',img);
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }
}
