import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/login/auth/auth.service';
import { User } from 'src/app/login/auth/User.model';
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
      this.route.paramMap.subscribe(paramMap=> {
        if(!paramMap.has('restaurantId')) {
          this.navCtrl.navigateBack('/restaurants/tabs/favorites');
        }

        this.updatedRestaurant = this.authServ.userData.favorites.find((res:Restaurant)=>{
          if (paramMap.get('restaurantId')===res.rId)
          return true
          else
          return false
        })

        this.authServ.getUser(this.authServ.userData.id).subscribe((result:User)=>{
          let updateRestaurant = result.favorites.find((res:Restaurant)=>{
            return res.id === result.id
          })
          console.log(updateRestaurant)
          this.updatedRestaurant = updateRestaurant
        })
        

        console.log(this.updatedRestaurant)
        

      }
      )
        
      } catch (error) {
        console.log(error)
      }
}

  onDelRestaurant () {

    this.authServ.deleteFavorite(this.authServ.userData,this.updatedRestaurant)
    this.navCtrl.back()
  }
}

