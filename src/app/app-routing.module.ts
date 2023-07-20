import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MainMenuComponent } from './mainMenu/mainMenu.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';

const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'accounts',component:AccountListComponent},
  {path:'accountTransaction/:account_id',component:AccountTransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
