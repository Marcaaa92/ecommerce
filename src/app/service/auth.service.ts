import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false

  constructor(private router : Router) { }

  logIn() {
    this.isLogged = true
    this.router.navigate(["/home"])
  }

  logOut() {
    this.isLogged = false
    this.router.navigate(["/login"])
  }

 public isAutenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
       resolve(this.isLogged)
    })
    return promise
  }
}
