import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {IonicInfiniteScrollComponent} from '../componentes/ionic-infinite-scroll/ionic-infinite-scroll.component'
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AvatarComponent } from '../componentes/avatar/avatar.component';
import { SidemenuComponent } from '../componentes/sidemenu/sidemenu.component';

//Se importan componentes que sean Standalonte: True
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicInfiniteScrollComponent,
    SidemenuComponent,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
