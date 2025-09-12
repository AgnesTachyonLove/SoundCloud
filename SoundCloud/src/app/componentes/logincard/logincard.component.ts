import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController , ToastController, AnimationController } from '@ionic/angular';

import { Router } from '@angular/router';



@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.scss'],
  standalone: false,
})
export class LogincardComponent  implements OnInit, AfterViewInit{

  @ViewChild('loginBtn', { read: ElementRef }) loginBtn!: ElementRef;
  private animacionError!: any;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private router: Router, private animationCtrl: AnimationController) {}

  usuario = 'User_1'
  password = '123'
  
  error_messages = {
    'CODE_L1': 'Usuario y/o contraseñas incorrectos',
  }

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

  validaciones = async () => {
    const usernameInput = document.getElementById("username") as any
    const passwordInput = document.getElementById("password") as any
    const username = await usernameInput.getInputElement().then((inputEl: HTMLInputElement) => inputEl.value)
    const password = await passwordInput.getInputElement().then((passwordEl: HTMLInputElement) => passwordEl.value)

    this.usuario = username
    this.password = password

    if(this.usuario  != 'User_1' || this.password != '123'){
      return { mensaje : this.error_messages.CODE_L1, estado: false }
    }
    localStorage.setItem('username', username);
    return { mensaje: 'Login exitoso', estado: true }
  }

  login = async () => {
    const results = await this.validaciones()

    if(!results.estado){
      if (this.animacionError) {
        this.animacionError.play();
      }
      await this.mostrarError(results.mensaje)
    }
    else{
      this.router.navigate(['/home']);
    }
  }

  async mostrarError(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  } 


}

