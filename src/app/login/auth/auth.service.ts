import { EventEmitter, Injectable } from '@angular/core';
import { User } from './User.model';
import { Observable} from 'rxjs'
import { take, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore'
import * as firebase from 'firebase/app';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Observable<User[]>
  private userCollection: AngularFirestoreCollection<User> 
  userChanged = new EventEmitter <User>()

  constructor(private afStore : AngularFirestore) {
    this.userCollection = this.afStore.collection<User>('users')
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions=> {
        return actions.map (a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      })
    )
   } 

   getUsers(): Observable<User[]> {
     return this.users
   }

   getUser(id:string): Observable<User> {
     return this.userCollection.doc<User>(id).valueChanges().pipe(
       take(1),
       map(user => {
         user.userId = id
         return user
       })
     )
   }

   addUser (user:User): Promise<DocumentReference> {
    return this.userCollection.add(user)
   }
   
   addFavorites (user:User, restauData: Restaurant): Promise<void> {
     console.log(user.id,restauData)
     return this.userCollection.doc(user.id).update({
      /*
      id:user.userId,
      authId: user.authId,
      email: user.email,
      username: user.username,
      password: user.password,
      userId: user.userId,
      */

      favorites: firebase.default.firestore.FieldValue.arrayUnion(restauData)
     }).then(()=>console.log('Successfully Written')).catch(err=>console.log(err)).finally(()=>{
      this.userChanged.emit(user)
     })
   }

   deleteFavorite (user:User, restauData:Restaurant): Promise<void> {
    return this.userCollection.doc(user.id).update({         
      favorites: firebase.default.firestore.FieldValue.arrayRemove(restauData)
    }).then(()=>{
      console.log('Successfully Deleted')
    }).catch(err=>console.log(err)).finally(()=>{
      this.userChanged.emit(user)
    })
  }



  private _activatedUser : User


   replaceUser(loginData:User) {
    this._activatedUser = loginData
    this.userChanged.emit(this._activatedUser)
    console.log(this._activatedUser.id)
   }

  userlistChanged = new EventEmitter <User[]>()
  merchantPost = new EventEmitter <User>()
  private _userCredentials : User[] = [
  ]

  get userData () {
    return this._activatedUser;
    }

  private _userIsAuthenticated = false

  get userIsAuthenticated () {
    return this._userIsAuthenticated;
  }


  login () {
    this._userIsAuthenticated = true
  }

  logout() {
    this._userIsAuthenticated = false
  }



  pushCurrentUser (user:User) {
    this._activatedUser = user

  }

  get User () {
    return this._activatedUser
  }

  pushUser(signupData:User) {
    this._userCredentials.push(signupData)
    //*userlistchanged
    this.userlistChanged.emit(this._userCredentials)
    console.log(this._userCredentials)
  }

  get listUsers () {
    return this._userCredentials
  }




}
