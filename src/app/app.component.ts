import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { Product } from './data/product.data';
import { ProductService } from './service/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public authService :AuthService, private authGuardService :AuthGuardService, public product: ProductService){

  }
  logout(){
    this.authService.logOut();
  }
  authenticated(){
    return this.authService.isLogged
  }
}
