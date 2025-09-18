import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pageconfig',
    loadChildren: () => import('./pageconfig/pageconfig.module').then( m => m.PageconfigPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagelogin',
    loadChildren: () => import('./pagelogin/pagelogin.module').then( m => m.PageloginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
