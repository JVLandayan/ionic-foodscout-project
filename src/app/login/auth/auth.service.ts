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
      password: 'admin'
    },
    {
      authId: 2,
      userId: 21024,
      email: 'user@user.com',
      username: 'user',
      password: 'user'
    },
    {
      authId: 3,
      userId: 11302,
      email: 'merchant@merchant.com',
      username: 'merchant',
      password: 'merchant'
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
