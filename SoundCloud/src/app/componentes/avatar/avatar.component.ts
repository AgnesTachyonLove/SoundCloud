
import { Component } from '@angular/core';
import { IonAvatar, IonChip, IonLabel } from '@ionic/angular/standalone';
import { SharedServices } from 'src/app/servicios/shared.services';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
    imports: [IonAvatar, IonChip, IonLabel, NgIf],
})


export class AvatarComponent{
  constructor(private shared: SharedServices){}
  usuario: string | null = null; 
  ngOnInit(){
    this.shared.dato$.subscribe(username => {
      this.usuario = username
      console.log(username)
    })
  }
}
