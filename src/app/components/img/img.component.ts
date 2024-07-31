import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
  set changeImg(img: string){
    this.img = img;
    console.log('solo cambio la imagen', img);
    //aqui se puede hacer algo cuando cambie el valor de img
  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault=  " "
  counter = 0;
  counterFn: number |  undefined;


  constructor() {
    //antes del render
    //no correr cosas asincronas solo corrre una vez
    console.log('constructor', 'imgValue  ',  this.img);
  }

  ngOnChanges(OnChanges:SimpleChanges){
    //corre antes de renderizar
    //corre cada vez que cambia un valor de input
    console.log('ngOnChanges', 'imgValue  ',  this.img);
    console.log('ngOnChanges', 'OnChanges  ',  OnChanges);
  }

  ngOnInit():void {
    //corre antes de renderizar
    //corre una vez
    console.log('ngOnInit', 'imgValue  ',  this.img);
    this.counterFn = window.setInterval(() => {
      this.counter++;
    }, 1000);

  }

  ngAfterViewInit(){
    //corre despues de renderizar
    //corre una vez
    console.log('ngAfterViewInit');
    //se manejan los hijos, si se quiere ejecutar eventos con los hijos se debe hacer aqui
  }

  ngOnDestroy(){
    //corre cuando se destruye el componente
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img =  this.imageDefault;
  }
  imgLoaded(){
    console.log('hijo');
    this.loaded.emit(this.img);
  }

}
