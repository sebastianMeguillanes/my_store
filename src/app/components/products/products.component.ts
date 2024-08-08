import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { Component } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  carrito: Product[] = [];
  total=0;
  products:  Product[] =[];
  today = new Date();
  date = new Date(2021,1,21);

  constructor (
      private storeService: StoreService,
      private ProductsService: ProductsService
    ) {
    this.carrito = this.storeService.getCarrito();
  }

  onAddToCard(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  ngOnInit():void {
    this.ProductsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

}



