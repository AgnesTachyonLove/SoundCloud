import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class SharedServices{
    private dato = new BehaviorSubject <string | null> (null);
    dato$ = this.dato.asObservable()

    enviarDato(username:string){
        this.dato.next(username)
    }
}