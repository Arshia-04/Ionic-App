import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsignupPageRoutingModule } from './gsignup-routing.module';

import { GsignupPage } from './gsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsignupPageRoutingModule
  ],
  declarations: [GsignupPage]
})
export class GsignupPageModule {}
