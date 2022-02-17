import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { Request } from '../interface/request';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private Router: Router) {}

  canActivate(): boolean {
    this.authService.getProfile().subscribe((response: any) => {
      if (response.status === 200) {
        return true;
      } else {
        this.authService.logout();
        this.Router.navigate(['login']);
        return false;
      }
    });
    
    return true;

    // if(this.authService.IsLoggedIn()){
    //   return true
    // }else{
    //   this.Router.navigate(['login'])
    //   return false
    // }
    


  }
}
