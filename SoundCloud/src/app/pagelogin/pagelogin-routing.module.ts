import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageloginPage } from './pagelogin.page';

const routes: Routes = [
  {
    path: '',
    component: PageloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageloginPageRoutingModule {}
