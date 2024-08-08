import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

//hace que se pueda inyectar en otros componentes o servivios
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private carrito: Product[] = [];
  private mycart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.mycart.asObservable();

  constructor() { }


  addProduct(product: Product){
    this.carrito.push(product);
    this.mycart.next(this.carrito);
  }

  getCarrito(){
    return this.carrito;
  }

  getTotal(){
    return this.carrito.reduce((acc, product) => acc + product.price.valueOf(), 0)
  }
}
