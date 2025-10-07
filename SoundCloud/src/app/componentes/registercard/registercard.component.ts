import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ApiServices } from 'src/app/servicios/api-services';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registercard',
  templateUrl: './registercard.component.html',
  styleUrls: ['./registercard.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, FormsModule],
})
export class RegistercardComponent  implements OnInit {

  constructor(private api: ApiServices, private router: Router, private alertCtrl : AlertController ) { }
  usuario: string =''
  password: string = ''
  ngOnInit(
  ) {
    this.usuario = ''
    this.password= ''
  }

  registro = ():void => {
    this.api.userRegister(this.usuario,  this.password).subscribe({
      next : () => {
        this.router.navigate(['pagelogin/'])
      },
      error: () =>{
        this.mostrarError('Error al registrar la cuenta')
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
}
