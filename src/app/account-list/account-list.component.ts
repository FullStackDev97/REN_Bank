import { Component } from '@angular/core';
import { Accounts } from '../classes/accounts';
import { ApiService } from '../services/api_service/api.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accounts :Accounts[] =  [];
  constructor(private apiService : ApiService){

  }

  ngOnInit(): void {
    this.apiService.getAccounts().subscribe((data) => { this.accounts = data});
  }


}
