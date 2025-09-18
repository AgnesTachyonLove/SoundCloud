import {Injectable } from "@angular/core";

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