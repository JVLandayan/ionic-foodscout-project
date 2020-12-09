import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../login/auth/auth.service';
import { Restaurant } from '../restaurants/restaurant.model';


@Component({
  selector: 'app-merchantpanel',
  templateUrl: './merchantpanel.page.html',
  styleUrls: ['./merchantpanel.page.scss'],
})
export class MerchantpanelPage implements OnInit {
  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() { 

  }


}
