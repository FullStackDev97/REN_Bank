import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounts } from 'src/app/classes/accounts';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl: String = 'http://localhost:8080/api/service-banque';
  accounts: any;

  constructor(private http: HttpClient) { 
    let userStr = localStorage.getItem('user');

    let user = JSON.parse(userStr || '{}');
    const params = new HttpParams()
      .set('unUtilisateurId', user.user_id);

      this.http.post<Accounts[]>(this.baseurl + "/selectCompte", null, { params }).subscribe((data) => { this.accounts = data});
  }


  getAccounts() {

   return this.accounts
  }


}
