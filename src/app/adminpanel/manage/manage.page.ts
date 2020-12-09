import { Component, OnInit } from '@angular/core';
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




}
