import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {



  constructor(public afStore: AngularFirestore, public restaurantServ: RestaurantService) { }
  loadedRestaurants: Restaurant[]
  public loadedRestau: Observable<Restaurant[]>


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

  options = {
    centeredSlides : true,
    loop: false,
    spaceBetween: -20
  }

}
