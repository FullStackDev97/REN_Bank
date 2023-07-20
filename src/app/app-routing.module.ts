import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MainMenuComponent } from './mainMenu/mainMenu.component';

const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'accounts',component:AccountListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
