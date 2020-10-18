import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories.model';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  loadednewRestaurant : Restaurant[];
  loadedCategories : Categories[];
  loadedrecRestaurant : Restaurant[];

  constructor(private restaurantServ: RestaurantService) { }

  ngOnInit() {
    this.loadedCategories = this.restaurantServ.categories
    this.loadednewRestaurant = this.restaurantServ.recomRestaurants
    this.loadedrecRestaurant = this.restaurantServ.recomRestaurants


    this.restaurantServ.RestaurantsChanged.subscribe((restaurantData: Restaurant[]) =>{
      this.loadednewRestaurant = this.restaurantServ.recomRestaurants
      this.loadedrecRestaurant = this.restaurantServ.recomRestaurants
    })
  } 

  //Slides
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
    slideShadows: true,
  };

  categories = {
    slidesPerView: 2.5,
  };

  Iterate : any[] = [0,1,2,3,4]

  

}
