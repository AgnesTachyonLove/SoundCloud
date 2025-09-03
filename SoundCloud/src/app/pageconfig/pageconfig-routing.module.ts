import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageconfigPage } from './pageconfig.page';

const routes: Routes = [
  {
    path: '',
    component: PageconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageconfigPageRoutingModule {}
