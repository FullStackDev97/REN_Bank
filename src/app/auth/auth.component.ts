import { Component } from '@angular/core';
import { AuthService } from '../services/auth_service/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  signUpInfos: any = {
    user_name:  '',
    user_password:  '',
    last_name:'',
    first_name: '',
    sex:0,
  }



  loginInfos: any = {
    user_name:  '',
    user_password:  ''
    
  }

  constructor(private authService : AuthService, private router: Router ) {
     
  }

  onLogin() {

    this.authService.login(this.loginInfos.user_name,this.loginInfos.user_password);
    
  }

  


  onSignup() {
    console.log(this.signUpInfos.user_name);

    console.log();

    console.log(this.signUpInfos.user_password);

    console.log(this.signUpInfos.last_name);

    console.log();

    console.log(this.signUpInfos.first_name);

    console.log();

    console.log(this.signUpInfos.sex);
  }
}
