import {Injectable } from "@angular/core";
import { AudioService } from "./audio-services";
import { Router } from "@angular/router";
@Injectable ({providedIn : 'root'})

export class AuthServices{
   constructor(private audio: AudioService, private router : Router){}

   getStatus = (): boolean =>{
      return !!localStorage.getItem('access') 
   }
   logout = (): void => {
    this.audio.stop()
    localStorage.removeItem('access')    
    localStorage.removeItem('refresh')
   }
}