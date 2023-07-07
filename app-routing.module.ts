import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'fblogin',
    loadChildren: () => import('./fblogin/fblogin.module').then( m => m.FbloginPageModule)
  },
  {
    path: 'glogin',
    loadChildren: () => import('./glogin/glogin.module').then( m => m.GloginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'fbsignup',
    loadChildren: () => import('./fbsignup/fbsignup.module').then( m => m.FbsignupPageModule)
  },
  {
    path: 'gsignup',
    loadChildren: () => import('./gsignup/gsignup.module').then( m => m.GsignupPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
