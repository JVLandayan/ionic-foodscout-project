import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { Categories } from './categories.model';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

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

  private _fRestaurants : Restaurant[] = []
  fRestaurantChanged = new EventEmitter <Restaurant[]>()
  RestaurantsChanged = new EventEmitter<Restaurant[]>()
  private _Restaurants : Restaurant[] = [
    {
    id:'r1',
    rTitle:'Restaurant 1',
    rDescription:'Number one fastfood in the Philippines Islands of the of the',
    rimageUrl:{imgMain:'https://download.logo.wine/logo/Jollibee/Jollibee-Logo.wine.png'
    , imgSub:[{},{}]},
    rRating: 4.7,
    rPrice:{min:200,max:400},
    isFavorite: false
    },
    {
      id:'r2',
      rTitle:'Restaurant 2',
      rDescription:'Number one fastfood in the intergalactic universe',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
    {
      id:'r3',
      rTitle:'Restaurant 3',
      rDescription:'Tagaytays number one with the tagline "Anong gentle gentle"',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://cdn1.clickthecity.com/images/articles/content/5bbee086dbbfb3.06299918.jpg",""]},
      rPrice:{min:300,max:400},
      rRating: 4.1,
      isFavorite: false
    },
    {
      id:'r4',
      rTitle:'Restaurant 4',
      rDescription:'Number one fastfood in the intergalactic universe',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
    {
      id:'r5',
      rTitle:'Restaurant 5',
      rDescription:'Number one fastfood in the intergalactic universe',
      rimageUrl:{imgMain:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771007.jpg?crop=0.721xw:0.704xh;0.131xw,0.156xh&resize=768:*', 
      imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",""]},
      rPrice:{min:5000,max:10000},
      rRating: 4.3,
      isFavorite: false
    },
  ]

  constructor() { }

  get favRestaurants() {
    return [...this._fRestaurants]
  }

  get recomRestaurants () {
    return [...this._Restaurants]
  }

  getRestaurant (id:string) {
    return {...this._Restaurants.find(p=>p.id === id)}
  }

  pushFavorite (dataRestaurant:Restaurant) {

    const compareId = this._fRestaurants.some(data=>{
      return data.id === dataRestaurant.id
    })

    if(compareId){
      console.log("Failed to add")
    }
    else{
      this._fRestaurants.push(dataRestaurant)
      this.fRestaurantChanged.emit(this._fRestaurants)
    }




    

    
  }

  deleteRestaurant (id: string) {
    const updatedArray = this._fRestaurants.map(restaurantData =>{
      return restaurantData.id
    }).indexOf(id)
    this.fRestaurantChanged.emit(this._fRestaurants.splice(updatedArray,1))
  }
}
