import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/login/auth/auth.service';
import { Restaurant } from '../../restaurant.model';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  updatedRestaurant: Restaurant;

  constructor(private route: ActivatedRoute,private navCtrl: NavController, private restaurantServ: RestaurantService,private router:Router, private authServ: AuthService ) { }

  ngOnInit() {
    try {
      
      updatedRestaurant: Restaurant
      this.route.paramMap.subscribe(paramMap=> {
        if(!paramMap.has('restaurantId')) {
          this.navCtrl.navigateBack('/restaurants/tabs/discover');
        }
  
        this.restaurantServ.getRestau(paramMap.get('restaurantId')).subscribe((res)=>{
          this.updatedRestaurant =  res //Details of restaurant
        })
      }
      )
        
      } catch (error) {
        console.log(error)
      }
}

  onDelRestaurant () {
    /*
    this.restaurantServ.deleteRestaurant(this.restaurant.id)
    this.navCtrl.back()
    */

    console.log(this.authServ.userData)
    this.authServ.deleteFavorite(this.authServ.userData,this.updatedRestaurant)
    this.authServ.userData.userId
    
    this.navCtrl.back()
  }
}

