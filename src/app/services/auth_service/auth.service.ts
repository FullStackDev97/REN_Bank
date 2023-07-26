import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl : String = 'http://localhost:8080/api/service-banque';
  user : any = {user_name :'',password:'',user_id:''}

  constructor(private http: HttpClient , private router: Router) { }

  login(user_name:String , user_password : String){
    return this.http.post(this.baseurl+"/authentifier",{user_name:user_name, password:user_password}).subscribe(data=> this.setUserInfos(user_name,user_password,<number> data))
  }

  signUp(signUpInfos : any){
    console.log(signUpInfos);
    return this.http.post(this.baseurl+"/souscrire",{user_name:signUpInfos.user_name,
       user_password:signUpInfos.user_password,
       last_name:signUpInfos.last_name,
       first_name:signUpInfos.first_name,
       sex:signUpInfos.sex,
       type:signUpInfos.type,
       montant:signUpInfos.montant

      }).subscribe(data=> this.setUserInfos(signUpInfos.user_name,signUpInfos.user_password,<number> data))
  }

  setUserInfos(name : String,pwd: String,id: number){
    console.log(id);
    this.user.user_name = name;
    this.user.password = pwd;
    this.user.user_id = id;

    localStorage.setItem('user',JSON.stringify(this.user) );
  
  }

  isAuth(){
    if (localStorage.getItem('user') !== null ){
      return true
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

  
}
