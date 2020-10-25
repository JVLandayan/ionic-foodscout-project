import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/login/auth/auth.service';
import { User } from 'src/app/login/auth/User.model';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(private authService :AuthService, private restaurantService: RestaurantService, private navCtrl: NavController) { }
    
  ngOnInit() {
    
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  
  //* Merchant Update Requests
  loadedUsers: User[] = this.authService.listUsers.slice()
  filtered = this.loadedUsers.filter(users=>{
    return users.tempUpdate !== null
     }
   )
   

   onAccept(users: Restaurant) {
      this.restaurantService.pushMerchantUpdate(users)
      this.navCtrl.back()
   }

   onDeny(users: Restaurant) {
    this.authService.updateMerchantDeny(users)
    this.navCtrl.back()
   }

   //*Delete Posts
   loadedPosts : Restaurant[] = this.restaurantService.recomRestaurants

   onDelete(postData: Restaurant) {
    
   }



}
