import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { Global } from './global';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FormsModule } from '@angular/forms';
import { FilterArrayPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    LoginComponent,
    ProductListComponent,
    CartComponent,
    AddtocartComponent,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
