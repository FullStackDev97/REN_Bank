import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from '../classes/accounts';
import { ApiService } from '../services/api_service/api.service';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  template:`<div>
    no transactions
  </div>`,
  styleUrls: ['./account-transaction.component.css']
})
export class AccountTransactionComponent implements OnInit {
  account_id!: number;
  transactions :any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService : ApiService) { }

  ngOnInit(): void {
    this.account_id = parseInt( this.activatedRoute.snapshot.paramMap.get('account_id') || '0');
    this.apiService.getTransactions(this.account_id).subscribe(data => this.transactions =[data]  );
  }

 

  showTransactions(){
    console.log(this.transactions[0])
  }




}
