import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthServices } from "../servicios/auth-services";


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{
    constructor(
        private auth_services: AuthServices,
        private router: Router
    ){}
    //creacion de guard de ruta para la carga del home en el login
    canActivate = ():boolean => {
        if(this.auth_services.getStatus()){
            return true
        }else{
            this.router.navigate(['/pagelogin'])
            return false
        }
    }
}