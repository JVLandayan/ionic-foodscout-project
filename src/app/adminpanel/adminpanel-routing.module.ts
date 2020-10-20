import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpanelPage } from './adminpanel.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminpanelPage,
    children: [
      {
        path: 'manage',
        children:[
          {
            path:'',
            loadChildren: () => import('./manage/manage.module').then (m=>m.ManagePageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpanelPageRoutingModule {}
