import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsdetailPage } from './postsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PostsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsdetailPageRoutingModule {}
