import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string
  password: string

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login',
      message: 'Wrong Credentials',
      buttons: ['OK']
    });
    await alert.present();
  }

  constructor(private authServ: AuthService, private router: Router, private alertController: AlertController)  {
    
  }
  

  ngOnInit() {
  }

  onLogin() {
    const auth = this.authServ.getLogin(this.username,this.password)
    const verification = Object.entries(auth).length === 0
    
    if(verification){
      this.presentAlert()
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
