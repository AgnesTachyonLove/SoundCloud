import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class SharedServices{
  private username =  new BehaviorSubject< string | null >(
    localStorage.getItem('usuario')
  )
  


  dato$ = this.username.asObservable()

  enviarDato = (username: string) =>{
    this.username.next(username)
    localStorage.setItem('usuario',username)
  } 
}