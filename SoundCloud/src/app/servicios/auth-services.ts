import {Injectable } from "@angular/core";
import { AudioService } from "./audio-services";
@Injectable ({providedIn : 'root'})

export class AuthServices{
   private isLogged: boolean | null = false
   constructor(private audio: AudioService){}
   login = () =>{
      this.isLogged = true 
   }
   logout = () => {
    this.audio.stop()      
    this.isLogged = false
   }
   getStatus = (): boolean | null => { 
    return this.isLogged
   }
}