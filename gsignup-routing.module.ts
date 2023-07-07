import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsignupPage } from './gsignup.page';

const routes: Routes = [
  {
    path: '',
    component: GsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsignupPageRoutingModule {}
