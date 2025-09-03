import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogincardComponent } from '../componentes/logincard/logincard.component';
import { IonicModule } from '@ionic/angular';
import { PageloginPageRoutingModule } from './pagelogin-routing.module';
import { PageloginPage } from './pagelogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageloginPageRoutingModule
  ],
  declarations: [PageloginPage, LogincardComponent]
})
export class PageloginPageModule {}
