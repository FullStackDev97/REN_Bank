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
  user = JSON.parse(localStorage.getItem('user') || '{}')
  transactions :any;



  constructor(private http: HttpClient) { 

   

      
  }

  makeVirement(unCompteIdSrc: number, unCompteIdDst: number, unMontant: number) {
    const params = new HttpParams()
      .set('unUtilisateurId', this.user.user_id)
      .set('unCompteIdSrc', unCompteIdSrc)
      .set('unCompteIdDst', unCompteIdDst)
      .set('unMontant', unMontant);

    return this.http.post<any>(this.baseurl + '/virement', null, { params });
  }


  getAccounts() {
    const params = new HttpParams()
    .set('unUtilisateurId', this.user.user_id);
    
    return this.http.post<Accounts[]>(this.baseurl + "/selectCompte", null, { params });
  }

  getTransactions(nb_compte : number){
    
    const params = new HttpParams()
    .set('inNumeroCompte', nb_compte)
    .set('user_id',this.user.user_id)

    return this.http.post(this.baseurl +"/compteHistorique",null ,{ params });
      
  }
}
