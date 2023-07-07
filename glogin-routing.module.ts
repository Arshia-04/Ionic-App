import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GloginPage } from './glogin.page';

const routes: Routes = [
  {
    path: '',
    component: GloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GloginPageRoutingModule {}
