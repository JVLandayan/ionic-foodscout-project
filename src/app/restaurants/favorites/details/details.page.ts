import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Restaurant } from '../../restaurant.model';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,private navCtrl: NavController, private restaurantServ: RestaurantService,private router:Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=> {
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.navigateBack('/restaurants/tabs/discover');
      }
      this.restaurant = this.restaurantServ.getRestaurant(paramMap.get('restaurantId'))
    })
}

  onDelRestaurant () {
    this.restaurantServ.deleteRestaurant(this.restaurant.id)
    this.navCtrl.back()
  }
}

