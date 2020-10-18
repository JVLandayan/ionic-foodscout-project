import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { IoniclogoComponent } from './ioniclogo/ioniclogo.component';

import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SlidesComponent,StartComponent,LogoComponent,IoniclogoComponent],
  exports: [SlidesComponent,StartComponent,LogoComponent,IoniclogoComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
