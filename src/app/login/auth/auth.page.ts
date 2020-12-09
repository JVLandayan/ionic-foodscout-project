import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicControllersService } from 'src/app/ionic-controllers.service';
import { AuthService } from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { User } from './User.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string
  password: string


  constructor(private authServ: AuthService, private router: Router, private ionicCtrl: IonicControllersService,
    public afStore: AngularFirestore)  {
    
  } 
  public users: Observable<User[]>
  usersArray: User[] 
  
  

  ngOnInit() {
    this.users = this.authServ.getUsers()
    this.users.subscribe((res:User[])=>{
      this.usersArray = res
    })

  }

  async onLogin() {   

    try {
  
      const verification = this.usersArray.find((userData:User)=>{
        if(userData.username === this.username && userData.password === this.password){
          return true 
        }
        return false
      })
   
  //verification == boolean if true > login wrong if false login
      if(verification === undefined){
        this.ionicCtrl.loginWrong()
      }
      else{
        this.authServ.login()
        this.router.navigateByUrl('/restaurants/tabs/home')
        this.authServ.replaceUser(verification)
        //Update user in authserv
      }
  
      //Empties inputboxes
      this.username=""
      this.password=""
    } catch (error) {
      console.dir(error)
    }
    
    

}
}
