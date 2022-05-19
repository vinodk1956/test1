import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})

export class Service {

    constructor() { }

  public Loan = [];

  addLoan(loan) {
    this.Loan.push(loan);
    console.log(this.Loan)
  }
  getAllLoans() {
    return this.Loan;
  }

  deleteLoan(id) {
    for (let i = 0; i < this.Loan.length; i++) {
      if (this.Loan[i].id == id) {
        this.Loan.splice(i, 1);
        console.log(true);
      }
    }
  }
}
