import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminpanel/admin.service';
import { AuthService } from '../login/auth/auth.service';
import { User } from '../login/auth/User.model';
import { Restaurant } from '../restaurants/restaurant.model';
import { RestaurantService } from '../restaurants/restaurant.service';

@Component({
  selector: 'app-merchantpanel',
  templateUrl: './merchantpanel.page.html',
  styleUrls: ['./merchantpanel.page.scss'],
})
export class MerchantpanelPage implements OnInit {
  constructor(private authService: AuthService, private adminService: AdminService) { }

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
  }

  edit () {
    this.editInfo = false
  }
}
