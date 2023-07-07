import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GloginPageRoutingModule } from './glogin-routing.module';

import { GloginPage } from './glogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GloginPageRoutingModule
  ],
  declarations: [GloginPage]
})
export class GloginPageModule {}
