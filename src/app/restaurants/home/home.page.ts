import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categories } from '../categories.model';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  

  constructor(private restaurantServ: RestaurantService, public afStore: AngularFirestore) { }

  public loadedRestau: Observable<Restaurant[]>
  loadedRestaurants: Restaurant[]

  ngOnInit() {

    try {
      this.loadedRestau = this.restaurantServ.getRestaus()
      this.loadedRestau.subscribe((res:Restaurant[])=>{
        this.loadedRestaurants = res
      })
    } catch (error) {
      console.dir(error)
    }

   
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
