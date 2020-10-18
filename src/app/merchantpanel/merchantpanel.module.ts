import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantpanelPageRoutingModule } from './merchantpanel-routing.module';

import { MerchantpanelPage } from './merchantpanel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantpanelPageRoutingModule
  ],
  declarations: [MerchantpanelPage]
})
export class MerchantpanelPageModule {}
