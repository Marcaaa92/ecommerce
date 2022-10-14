import {Component, Injectable, OnInit} from "@angular/core"
import {Product} from "../data/product.data"
import { CartComponent } from "../cart/cart.component"
import { Cart } from "../data/cart-item.data"
@Injectable(
    {
        providedIn: 'root'
    }
)

export class ProductService{

    products:Product[]=[
        {id: 1, name: "Rasoio", description: "un rasoio", price: 10.99, rate:"Good"},
        {id: 2, name: "Mela", description: "una mela", price: 10.99, rate:"Good"},
        {id: 3, name: "IoTelefono 14pro", description: "un telefono del fruttarolo", price: 1100.99, rate:"Good"},
        {id: 4, name: "Pollo", description: "un pollo", price: 5.99, rate:"Good"},
        {id: 5, name: "Mello", description: "una mello", price: 10.99, rate:"Good"},
        {id: 6, name: "IoTelefono 12pro", description: "un telefono del fruttarolo", price: 900.99, rate:"Good"},
        {id: 7, name: "PC MAC address", description: "un pc del fruttarolo", price: 2000.99, rate:"Good"},
        {id: 8, name: "Dentrificio", description: "una dentifricio", price: 3.99, rate:"Good"},
        {id: 9, name: "Copertaa", description: "è fatta di stoffa", price: 2.99, rate:"Good"},
        {id: 10, name: "JBL CASSA BLUETOOTH", description: "una cassa", price: 25.99, rate:"Good"},
        {id: 11, name: "Mixer", description: "una mixer audio", price: 90.99, rate:"Good"},
        {id: 12, name: "SMARTE WHACCHE", description: "un orologio", price: 190.99, rate:"Good"}
    ]
    
    c:Cart[]=[]

    constructor(){};

    search(idd: number){
        const pos = this.c.findIndex(i => i.product.id == idd);
        if(pos > -1){
            this.c[pos].qty=this.c[pos].qty+1
        }
        else{
           this.c.push({product:this.products[idd-1],qty:1})
        }
    }
}