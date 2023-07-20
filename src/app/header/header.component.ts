import { Component } from '@angular/core';
import { AuthService } from '../services/auth_service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService : AuthService){

  }
  checkAuth(){
    return this.authService.isAuth();
  }

  closeSession(){
    this.authService.logOut();
  }
}

