import { Component, OnInit } from '@angular/core';
import { Cart } from '../data/cart-item.data';
import { Product } from '../data/product.data';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/products.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  c=this.listCart.c;
  constructor( public listCart: ProductService, public auth: AuthService, public products: ProductService) { }
  total=0
  ngOnInit(): void {
  }

  getTotal(){
    this.c.forEach(element => {
      this.total=Number(this.total)+Number(element.product.price)*element.qty;
    });
    return this.total;
  }
}
