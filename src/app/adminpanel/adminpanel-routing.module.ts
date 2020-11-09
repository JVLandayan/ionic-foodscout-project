import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpanelPage } from './adminpanel.page';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminpanelPage,
    children:[
      {
        path: 'manage',
        children:[
          {
            path: '',
            loadChildren: () => import('./manage/manage.module').then( m => m.ManagePageModule)
          },
          {
            path: ':postId',
            loadChildren: () => import('./manage/postsdetail/postsdetail.module').then(m=>m.PostsdetailPageModule)
          }
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpanelPageRoutingModule {}
