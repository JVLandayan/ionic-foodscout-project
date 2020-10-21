import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicControllersService } from 'src/app/ionic-controllers.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string
  password: string


  constructor(private authServ: AuthService, private router: Router, private ionicCtrl: IonicControllersService)  {
    
  }
  

  ngOnInit() {
  }

  onLogin() {
    const auth = this.authServ.getLogin(this.username,this.password)
    const verification = Object.entries(auth).length === 0
    
    if(verification){
      this.ionicCtrl.loginWrong()
    }
    else{
      this.authServ.login()
      this.router.navigateByUrl('/restaurants/tabs/home')
      this.authServ.pushCurrentUser(auth)
    }
    this.username=""
    this.password=""

  }

  

}
