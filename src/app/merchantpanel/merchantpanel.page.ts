import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../login/auth/auth.service';
import { Restaurant } from '../restaurants/restaurant.model';


@Component({
  selector: 'app-merchantpanel',
  templateUrl: './merchantpanel.page.html',
  styleUrls: ['./merchantpanel.page.scss'],
})
export class MerchantpanelPage implements OnInit {
  constructor(private authService: AuthService, private navCtrl: NavController) { }

   editInfo : boolean = true
   postDescription = this.authService.User.ownRestaurant.rDescription
   ownedRestaurant : Restaurant = this.authService.User.ownRestaurant
   postTitle = this.authService.User.ownRestaurant.rTitle
   post = this.authService.User.ownRestaurant.rDescription

  ngOnInit() { 

  }


  submit() {
    const postUpdate = this.ownedRestaurant = {
      id: this.ownedRestaurant.id,
      rTitle: this.postTitle,
      rDescription :this.postDescription,
      rimageUrl: this.ownedRestaurant.rimageUrl,
      rPrice: this.ownedRestaurant.rPrice,
      rRating: this.ownedRestaurant.rRating,
      isFavorite: this.ownedRestaurant.isFavorite
    }
    this.authService.postTemp(postUpdate)
    this.navCtrl.back()
  }

  edit () {
    this.editInfo = false
  }
}
