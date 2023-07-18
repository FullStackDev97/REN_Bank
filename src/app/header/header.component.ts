import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAuth(){
    if (localStorage.getItem('user') == null || localStorage.getItem('user') == undefined){
      return false
    }else{
      return true;
    }
  }

}
