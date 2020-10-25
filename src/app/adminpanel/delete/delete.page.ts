import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  constructor(private restaurantService: RestaurantService) { }

  loadedRestaurant: Restaurant[] = this.restaurantService.recomRestaurants


  ngOnInit() {
    this.restaurantService.RestaurantsChanged.subscribe((rArrData: Restaurant[])=>{
      this.loadedRestaurant = rArrData
    })

  }

}
