import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth/auth.service';
import { User } from 'src/app/login/auth/User.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(private authService :AuthService) { }

  loadedUsers: User[] = this.authService.listUsers.slice()
  filtered = this.loadedUsers.filter(users=>{
    return users.tempUpdate !== null
   }
   )

  
  ngOnInit() {

  this.authService.merchantPost.subscribe(()=>{

  })



}
}
