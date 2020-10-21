import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { IonicControllersService } from '../ionic-controllers.service';
import { AuthService } from '../login/auth/auth.service';
import { Categories } from './categories.model';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private ionicCtrl: IonicControllersService, private authService: AuthService) { }

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

  private _Restaurants : Restaurant[] = [
    {
    id:'r1',
    rTitle:'Restaurant 1',
    rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
    rimageUrl:{imgMain:'https://download.logo.wine/logo/Jollibee/Jollibee-Logo.wine.png'
    , imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",]},
    rRating: 4.7,
    rPrice:{min:200,max:400},
    isFavorite: false
    },
    {
      id:'r2',
      rTitle:'Restaurant 2',
      rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
    {
      id:'r3',
      rTitle:'Restaurant 3',
      rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://cdn1.clickthecity.com/images/articles/content/5bbee086dbbfb3.06299918.jpg",""]},
      rPrice:{min:300,max:400},
      rRating: 4.1,
      isFavorite: false
    },
    {
      id:'r4',
      rTitle:'Restaurant 4',
      rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
    {
      id:'r5',
      rTitle:'Restaurant 5',
      rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
  ]



  get favRestaurants() {
    return [...this.authService.User.favorites]
  }

  get recomRestaurants () {
    return [...this._Restaurants]
  }

  getRestaurant (id:string) {
    return {...this._Restaurants.find(p=>p.id === id)}
  }

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
  deleteRestaurant (id: string) {
    const updatedArray = this.authService.User.favorites.map(restaurantData =>{
      return restaurantData.id
    }).indexOf(id)
    this.fRestaurantChanged.emit(this.authService.User.favorites.splice(updatedArray,1))
  }
}
