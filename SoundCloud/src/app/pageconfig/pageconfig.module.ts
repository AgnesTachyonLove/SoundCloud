import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageconfigPageRoutingModule } from './pageconfig-routing.module';

import { PageconfigPage } from './pageconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageconfigPageRoutingModule
  ],
  declarations: [PageconfigPage]
})
export class PageconfigPageModule {}
