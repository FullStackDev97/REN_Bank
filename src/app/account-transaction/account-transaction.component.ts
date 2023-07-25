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
  showed_transactions : any[] = [];
  typeOp: string = '';
  from !: Date;
  to !: Date;

  constructor(private activatedRoute: ActivatedRoute, private apiService : ApiService) { }

  ngOnInit(): void {
    this.account_id = parseInt( this.activatedRoute.snapshot.paramMap.get('account_id') || '0');
    this.apiService.getTransactions(this.account_id).subscribe(data => this.transactions =[...data]  );
    this.apiService.getTransactions(this.account_id).subscribe(data => this.showed_transactions =[...data]  );
  }

 

  resetTransactions(){
    this.showed_transactions = this.transactions;
  }

  filterTransacs(){

    this.showed_transactions = [];
    this.transactions.forEach((element: { date: any; montant:number }) => {

      if(this.typeOp == ''){
        if (element.date >= this.from && element.date<= this.to ) {
          console.log(element);
          this.showed_transactions.push(element);
          
        }
      }else if (this.typeOp == 'credit') {
        if (element.date >= this.from && element.date<= this.to && element.montant >0 ) {
          console.log(element);
          this.showed_transactions.push(element);
          
        }
      }else if (this.typeOp == 'debit') {
        if (element.date >= this.from && element.date<= this.to && element.montant <0 ) {
          console.log(element);
          this.showed_transactions.push(element);
          
        }
      }

      if (this.from == undefined || this.to == undefined ) {
        if (this.typeOp == 'debit') {
          if ( element.montant <0 ) {
            console.log(element);
            this.showed_transactions.push(element);
            
          }
        }else if(this.typeOp == 'debit'){
          if ( element.montant <0 ) {
            console.log(element);
            this.showed_transactions.push(element);
            
          }
        }else{
          this.showed_transactions = this.transactions;
        }
      }

      
    });
  }




}
