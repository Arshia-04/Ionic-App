import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FbsignupPage } from './fbsignup.page';

const routes: Routes = [
  {
    path: '',
    component: FbsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FbsignupPageRoutingModule {}
