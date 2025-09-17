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
import { RouterModule } from '@angular/router'; 

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
  constructor() { }
  logout = () =>{
    localStorage.removeItem("username")
  }
  ngOnInit(){
    this.username = localStorage.getItem("username")
  }
}
