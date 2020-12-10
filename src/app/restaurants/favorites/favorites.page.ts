import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/auth/auth.service';
import { User } from 'src/app/login/auth/User.model';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  userFavorites : Restaurant[]
  public activeuser : Observable<User>
  activeUser: User
  

  constructor(private authServ : AuthService, public afStore :AngularFirestore) { 
    
   }

   

  ngOnInit() {
    this.activeuser = this.authServ.getUser(this.authServ.userData.id)
    this.activeuser.subscribe((res:User)=>{
      this.userFavorites = res.favorites
      console.log(res.favorites)
    })
    
    this.authServ.userChanged.subscribe((res:User)=>{
        this.authServ.getUser(res.id).subscribe((res:User)=>{
          this.userFavorites = res.favorites
        })
    })
    
    
  }

}
