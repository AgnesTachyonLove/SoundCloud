import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageregisterPage } from './pageregister.page';

const routes: Routes = [
  {
    path: '',
    component: PageregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageregisterPageRoutingModule {}
