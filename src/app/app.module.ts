import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainMenuComponent } from './mainMenu/mainMenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ValidatedPaymentComponent } from './validatedPayment/validatedPayment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    FooterComponent,
    ValidatedPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
