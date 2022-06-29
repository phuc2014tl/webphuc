import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private loginservice: LoginService, private router: Router) {}
  canActivate() {
    if (this.loginservice.loggedin()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
