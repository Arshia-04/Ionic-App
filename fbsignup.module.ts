import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbsignupPageRoutingModule } from './fbsignup-routing.module';

import { FbsignupPage } from './fbsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbsignupPageRoutingModule
  ],
  declarations: [FbsignupPage]
})
export class FbsignupPageModule {}
