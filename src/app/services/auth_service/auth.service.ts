import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl : String = 'http://localhost:8080/api/service-banque';
  user : any = {user_name :'',password:'',user_id:''}

  constructor(private http: HttpClient) { }

  login(user_name:String , user_password : String){
    return this.http.post(this.baseurl+"/authentifier",{user_name:user_name, password:user_password}).subscribe(data=> this.setUserInfos(user_name,user_password,<number> data))
  }

  setUserInfos(name : String,pwd: String,id: number){
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
  }

  
}
