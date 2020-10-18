import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userData:User
  emailAddress: string
  userName: string
  password: string
  constructor(private authService:AuthService , private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userData = {
      authId: 2,
      userId: Math.floor(Math.random() * 90000) + 10000,
      email: this.emailAddress,
      username: this.userName,
      password: this.password
    }
    this.authService.pushUser(this.userData)
    this.router.navigateByUrl('auth')
  }
}
