import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/products.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = this.listaProducts.products;
  search:string=""
  constructor(public listaProducts: ProductService, public auth: AuthService) {
  }


  @Input() a = 0
  @Input() b = this.products.length
  ngOnInit(): void {
  }

}
