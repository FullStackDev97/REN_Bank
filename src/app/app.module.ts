import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './mainMenu/mainMenu.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { ValidatedPaymentComponent } from './validatedPayment/validatedPayment.component';
import { HomeComponent } from './home/home.component';
import { VirementComponent } from './virement/virement.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    MainMenuComponent,
    AccountListComponent,
    AccountTransactionComponent,
    ValidatedPaymentComponent,
    HomeComponent,
    VirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }