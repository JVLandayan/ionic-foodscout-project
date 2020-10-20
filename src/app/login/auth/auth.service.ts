import { EventEmitter, Injectable } from '@angular/core';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _activatedUser : User
  userChanged = new EventEmitter <User>()
  userlistChanged = new EventEmitter <User[]>()
  private _userCredentials : User[] = [
    { 
      authId: 1,
      userId: 23045,
      email: 'admin@admin.com',
      username: 'admin',
      password: 'admin',
      favorites: [],
      ownRestaurant: null,
    },
    {
      authId: 2,
      userId: 21024,
      email: 'user@user.com',
      username: 'user',
      password: 'user',
      favorites: [],
      ownRestaurant: null,
    },
    {
      authId: 3,
      userId: 11302,
      email: 'merchant@merchant.com',
      username: 'merchant',
      password: 'merchant',
      favorites: [],
      ownRestaurant: {
        id:'r10',
        rTitle:'Restaurant 1',
        rDescription:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis modi autem veritatis ',
        rimageUrl:{imgMain:'https://download.logo.wine/logo/Jollibee/Jollibee-Logo.wine.png'
        , imgSub:["https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/image1-2.png",]},
        rRating: 4.7,
        rPrice:{min:700,max:1000},
        isFavorite: false
        },

    }
  ]

  get userData () {
    return this._userCredentials;
    }

  private _userIsAuthenticated = false

  get userIsAuthenticated () {
    return this._userIsAuthenticated;
  }

  constructor() { }

  login () {
    this._userIsAuthenticated = true
  }

  logout() {
    this._userIsAuthenticated = false
  }

  getLogin (username:string, password:string) {
    return {...this._userCredentials.find(p=>p.username === username && p.password===password)}
  }

  pushCurrentUser (user:User) {
    this._activatedUser = user
    this.userChanged.emit(this._activatedUser)
  }

  get User () {
    return this._activatedUser
  }

  pushUser(signupData:User) {
    this._userCredentials.push(signupData)
    this.userlistChanged.emit(this._userCredentials)
    console.log(this._userCredentials)
  }

}
