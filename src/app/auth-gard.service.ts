import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth_service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuth()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
