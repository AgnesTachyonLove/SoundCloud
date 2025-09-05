import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.scss'],
  standalone: false,
})
export class LogincardComponent  implements OnInit {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {}

  usuario = 'User_1'
  password = '123'


  error_messages = {
    'CODE_L1': 'Usuario y/o contraseñas incorrectos',
  }

  ngOnInit() {
    this.usuario = ''
    this.password = ''
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
    return { mensaje: 'Login exitoso', estado: true }
  }

  login = async () => {
    const results = await this.validaciones()

    if(!results.estado){
      await this.mostrarError(results.mensaje)
    }
    else{
      await this.loginExitoso(results.mensaje)
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

  loginExitoso = async(mensaje: string) => {
    const toast = await this.alertCtrl.create({
      header: 'Login exitoso',
      message: mensaje,
      buttons: ['OK']
    });
    await toast.present();
  }
}

