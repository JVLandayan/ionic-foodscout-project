import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(
    route: Route, 
    segments: UrlSegment[]): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authServ.userIsAuthenticated) {
        this.router.navigateByUrl('/login')
      }
      return this.authServ.userIsAuthenticated
    }
    constructor (private authServ: AuthService, private router: Router) {

    }
  
}
