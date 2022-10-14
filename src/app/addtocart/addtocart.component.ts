import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/products.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  product
  constructor(private route: ActivatedRoute, private router :Router, public listaProducts: ProductService, public auth: AuthService) {
    const { id } = route?.snapshot?.params ?? {}
    if(id!=undefined){
    this.product = listaProducts.search(id)
    }
  }

  ngOnInit(): void {
  }

}
