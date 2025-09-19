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
import { AudioService } from 'src/app/servicios/audio-services';
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
  constructor(private audio: AudioService) {}
  logout = () =>{
    this.audio.stop()
  }
  ngOnInit(){
    this.username = localStorage.getItem("username")
  }
}
