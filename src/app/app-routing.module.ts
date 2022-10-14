import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from './service/auth-guard.service';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductListComponent},
  {path:"pagina-non-trovata", component:NotFoundComponent},
  {path:"login", component:LoginComponent},
  {path:"addtocart/:id", component:AddtocartComponent, canActivate: [AuthGuardService]},
  {path:"cart", component:CartComponent, canActivate: [AuthGuardService]},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
