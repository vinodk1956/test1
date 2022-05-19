import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from "src/app/addLoan/add-loan.component";
import { RemoveLoanComponent } from "src/app/remove-loan/remove-loan.component";
import { GetAllLoansComponent } from "src/app/get-all-loan/get-all-loans.component";

const routes: Routes = [

  {path:'add',component:AddLoanComponent},
  {path:'remove',component:RemoveLoanComponent},
  {path:'getAll', component:GetAllLoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
