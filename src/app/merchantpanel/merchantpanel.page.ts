import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService) { }

   editInfo : boolean = true

  ownedRestaurant : Restaurant = this.authService.User.ownRestaurant

  ngOnInit() { 
  }


  submit() {

  }

  edit () {
    this.editInfo = false
  }
}
