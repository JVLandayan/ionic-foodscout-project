import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantpanelPage } from './merchantpanel.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantpanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantpanelPageRoutingModule {}
