import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/angular/standalone';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router, RouterModule } from '@angular/router'; 
import { AuthServices } from 'src/app/servicios/auth-services';
import { ApiServices } from 'src/app/servicios/api-services';
import { SharedServices } from 'src/app/servicios/shared.services';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [
    RouterModule,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonMenu,
    IonTitle, 
    IonToolbar, 
    AvatarComponent
  ],
})
export class SidemenuComponent{
  username: string | null = null
  constructor(private auth : AuthServices, private api: ApiServices, private router: Router, private menu: MenuController) {}
  logout = async () => {
    this.api.clearTokens()
    this.auth.logout()

    await this.menu.close()
    this.router.navigate(['pagelogin/'])
  }
}
