import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedRestaurant: Restaurant[] = []

  isitFavorite = '1'

  constructor(private restaurantServ: RestaurantService) { }

  ngOnInit() {
    this.loadedRestaurant = this.restaurantServ.recomRestaurants
    this.restaurantServ.RestaurantsChanged.subscribe(()=>{
      this.loadedRestaurant = this.restaurantServ.recomRestaurants
    })
  }

  options = {
    centeredSlides : true,
    loop: false,
    spaceBetween: -20
  }

}
