import { Component } from '@angular/core';
import { AuthService } from '../services/auth_service/auth.service';

@Component({
  selector: 'app-mainMenu',
  templateUrl: './mainMenu.component.html',
  styleUrls: ['./mainMenu.component.css']
})
export class MainMenuComponent {
  constructor(public authService : AuthService){

  }

  

}
