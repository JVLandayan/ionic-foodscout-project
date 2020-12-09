import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User.model';
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import {AngularFirestore} from '@angular/fire/firestore'

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
  constructor(private authService:AuthService , private router: Router, public afAuth : AngularFireAuth,
    public afStore: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit() {


    this.userData = {
      id:null,
      authId: 2,
      email: this.emailAddress,
      username: this.userName,
      password: this.password,
      favorites: [],
    }

    this.authService.addUser(this.userData)
    this.router.navigateByUrl('auth')
  }
}
