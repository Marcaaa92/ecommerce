import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private authService :AuthService, private authGuardService :AuthGuardService){

  }
  logout(){
    this.authService.logOut();
  }
  authenticated(){
    return this.authService.isLogged
  }
}
