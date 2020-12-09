import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './login/auth/auth.service';
import { Router } from '@angular/router';
import { User } from './login/auth/User.model';
import { RestaurantService } from './restaurants/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authServ : AuthService,
    private router: Router,
    private restaurantService: RestaurantService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogout() {
    this.authServ.logout()
    this.router.navigateByUrl('/login')
  }

  LoggedInUser: User = {
    id: null,
    authId: 3,
    email: null,
    username: null,
    password: null,
    favorites: null,
  }

  userAuth:string
  panel:string

  ngOnInit () {
    this.authServ.userChanged.subscribe((user: User)=>{
      this.LoggedInUser = user
      console.log(this.LoggedInUser)
      if (this.LoggedInUser.authId == 1){
        this.panel="adminpanel"
      }
    })
  }


  
}
