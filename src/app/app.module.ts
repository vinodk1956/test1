import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLoanComponent } from './addLoan/add-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';
import { GetAllLoansComponent } from './get-all-loan/get-all-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLoanComponent,
    RemoveLoanComponent,
    GetAllLoansComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
