import { Inject, Injectable } from "@angular/core";
import { flush } from "@angular/core/testing";

@Injectable ({providedIn : 'root'})

export class AuthServices{
   private isLogged: boolean | null = false
   
   login = () =>{
        this.isLogged = true 
   }
   logout = () => {
    this.isLogged = false
   }
   getStatus = (): boolean | null => { 
    return this.isLogged
   }
}