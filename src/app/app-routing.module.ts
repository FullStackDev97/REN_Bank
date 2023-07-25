import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MainMenuComponent } from './mainMenu/mainMenu.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { AuthGardService } from './auth-gard.service';
import { HomeComponent } from './home/home.component';
import { VirementComponent } from './virement/virement.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MainMenuComponent,canActivate:[AuthGardService]},
  {path:'virementGood',component:MainMenuComponent,canActivate:[AuthGardService]},
  {path:'accounts',component:AccountListComponent ,canActivate:[AuthGardService]},
  {path:'virement',component:VirementComponent ,canActivate:[AuthGardService]},
  {path:'accountTransaction/:account_id',component:AccountTransactionComponent,canActivate:[AuthGardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
