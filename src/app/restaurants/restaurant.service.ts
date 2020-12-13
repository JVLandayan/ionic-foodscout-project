import { EventEmitter, Injectable } from '@angular/core';
import { IonicControllersService } from '../ionic-controllers.service';
import { AuthService } from '../login/auth/auth.service';
import { Categories } from './categories.model';
import { Restaurant } from './restaurant.model';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurant: Observable<Restaurant[]>
  private restaurantCollection: AngularFirestoreCollection<Restaurant> 

  constructor(private afStore : AngularFirestore, private ionicCtrl: IonicControllersService, private authService: AuthService) {
    this.restaurantCollection = this.afStore.collection<Restaurant>('restaurants')
    this.restaurant = this.restaurantCollection.snapshotChanges().pipe(
      map(actions=> {
        return actions.map (a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      })
    )
   } 

   getRestaus(): Observable<Restaurant[]> {
     return this.restaurant
   }

   getRestau(id:string): Observable<Restaurant> {
     return this.restaurantCollection.doc<Restaurant>(id).valueChanges().pipe(
       take(1),
       map(restaurant => {
         restaurant.rId = id
         return restaurant
       })
     )
   }

   addRestau (restaurant:Restaurant): Promise<DocumentReference> {
    return this.restaurantCollection.add(restaurant)
   }
   
   updateRestau (restaurant:Restaurant): Promise<void> {
     return this.restaurantCollection.doc(restaurant.id).update({

     })
   }

   deleteRestau (id: string): Promise<void> {
    return this.restaurantCollection.doc(id).delete()
   }


  private _categories : Categories[] = [{
    id: 1,
    details: {
      name:'Japanese',
      svgUrl: 'assets/category-svg/def-logo.svg' ,
      clrCode: 'primary'
    }
  },
  {
    id: 2,
    details: {
      name:'Mexican',
      svgUrl: 'assets/category-svg/def-logo.svg' ,
      clrCode: 'secondary'
    }
  },
  {
    id: 3,
    details: {
      name:'Filipino',
      svgUrl: 'assets/category-svg/def-logo.svg',
      clrCode:'light'
    }
  },
  {
    id: 4,
    details: {
      name:'Chinese',
      svgUrl: 'assets/category-svg/def-logo.svg' ,
      clrCode: 'success'
    }
  },
  ]
  get categories() {
    return [...this._categories]
  }

  

//Restaurant related
  fRestaurantChanged = new EventEmitter <Restaurant[]>()
  fRestaurantData = new EventEmitter<Restaurant>()
  RestaurantsChanged = new EventEmitter<Restaurant[]>()
  RestaurantChanged = new EventEmitter<Restaurant>()
  restaurantUpdates = new EventEmitter<Restaurant>()


  get favRestaurants() {
    return [...this.authService.User.favorites]
  }


  //*Push methods

  pushFavorite (dataRestaurant:Restaurant) {
    const compareId = this.authService.User.favorites.some(data=>{
      return data.id === dataRestaurant.id
    })
    if(compareId){
      this.ionicCtrl.favoriteOverflow()
    }
    else{
      this.authService.User.favorites.push(dataRestaurant)
      this.fRestaurantChanged.emit(this.authService.User.favorites)
    } 
  }  
}
