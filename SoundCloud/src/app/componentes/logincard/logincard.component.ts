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

  validaciones = () => {
    if(this.usuario  != 'User_1' || this.password != '123'){
      return { mensaje : this.error_messages.CODE_L1, estado: false }
    }
    return { mensaje: 'Login exitoso', estado: true }
  }

  login = async () => {
    const results = this.validaciones()

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
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration:2000,
      color:'success',
      position:'top'
    });
    await toast.present();
  }
}

