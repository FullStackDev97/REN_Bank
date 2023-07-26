import { Component } from '@angular/core';
import { AuthService } from '../services/auth_service/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api_service/api.service';

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
    type : '',
    montant : 0
  }

  name_unique = false;

  loginInfos: any = {
    user_name:  '',
    user_password:  ''
    
  }

  constructor(private authService : AuthService,private apiService : ApiService, private router: Router ) {
     
  }

  onLogin() {

    this.authService.login(this.loginInfos.user_name,this.loginInfos.user_password);
    this.router.navigate(['/menu'])
    
  }

  forward(){
    if(this.name_unique){
      this.name_unique = false;
    }else{
      this.name_unique = true;
    }
    

    return this.name_unique;
  }

  


  onSignup() {
    
    this.authService.signUp(this.signUpInfos);
    this.router.navigate(['/menu']);
    
  }
}
