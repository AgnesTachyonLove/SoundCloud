import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageregisterPageRoutingModule } from './pageregister-routing.module';

import { PageregisterPage } from './pageregister.page';
import { RegistercardComponent } from '../componentes/registercard/registercard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageregisterPageRoutingModule,
    RegistercardComponent
  ],
  declarations: [PageregisterPage]
})
export class PageregisterPageModule {}
