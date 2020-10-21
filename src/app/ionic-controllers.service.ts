import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicControllersService {

  constructor(private alertController: AlertController) {  }

  async loginWrong() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login',
      message: 'Wrong Credentials',
      buttons: ['OK']
    });
    await alert.present();
  }

  async favoriteOverflow() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Failed to Add',
      message: 'Restaurant is already at the favorites tab',
      buttons: ['OK']
    });
    await alert.present();
  }

}
