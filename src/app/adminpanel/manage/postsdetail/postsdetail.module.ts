import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsdetailPageRoutingModule } from './postsdetail-routing.module';

import { PostsdetailPage } from './postsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsdetailPageRoutingModule
  ],
  declarations: [PostsdetailPage]
})
export class PostsdetailPageModule {}
