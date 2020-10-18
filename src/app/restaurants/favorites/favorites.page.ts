import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  loadedRestaurants : Restaurant[]

  constructor(private restaurantServ: RestaurantService) { 
    
   }

  ngOnInit() {
    this.loadedRestaurants = this.restaurantServ.favRestaurants
    this.restaurantServ.fRestaurantChanged.subscribe(()=>{
      this.loadedRestaurants = this.restaurantServ.favRestaurants
    })
  }

}
