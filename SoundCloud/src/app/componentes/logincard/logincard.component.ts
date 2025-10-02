
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController ,AnimationController } from '@ionic/angular';
import { AuthServices } from 'src/app/servicios/auth-services';
import { Router } from '@angular/router';
import { SharedServices } from 'src/app/servicios/shared.services';
import { ApiServices } from 'src/app/servicios/api-services';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.scss'],
  standalone: false,
})
export class LogincardComponent  implements OnInit, AfterViewInit{

  constructor(
    private alertCtrl: AlertController, 
    private router: Router,
    private shared: SharedServices,
    private animationCtrl: AnimationController,
    private authServices: AuthServices,
    private api: ApiServices
  ) {}

  @ViewChild('loginBtn', { read: ElementRef }) loginBtn!: ElementRef;
  private animacionError!: any;
    usuario: string = ''
    password: string = ''

  ngOnInit() {
    this.usuario = ''
    this.password = ''
  }
  
  ngAfterViewInit() {
    // Creamos la animación una sola vez
    this.animacionError = this.animationCtrl
      .create()
      .addElement(this.loginBtn.nativeElement)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 0.25, transform: 'translateX(-8px)' },
        { offset: 0.5, transform: 'translateX(8px)' },
        { offset: 0.75, transform: 'translateX(-8px)' },
        { offset: 1, transform: 'translateX(0)' },
      ]);
  }

  validaciones = ()=> {
    this.api.loginUser(this.usuario, this.password).subscribe({
      next:() => {
        this.mandar(this.usuario)
        this.authServices.getStatus()
        this.router.navigate(['home/'])
      },
      error: () =>{
        this.animacionError.play()
        this.mostrarError('Error al iniciar sesion')
      }
    })
  }


  async mostrarError(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  } 


  mandar(username: string){
    this.shared.enviarDato(username)
  }



}

