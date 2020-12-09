import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-postsdetail',
  templateUrl: './postsdetail.page.html',
  styleUrls: ['./postsdetail.page.scss'],
})
export class PostsdetailPage implements OnInit {
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,private navCtrl: NavController, private restaurantServ: RestaurantService,private router:Router ) { }

  ngOnInit() {
}

}
