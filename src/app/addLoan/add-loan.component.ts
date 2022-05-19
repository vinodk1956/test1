import { Component, OnInit } from '@angular/core';
import { Service } from "src/app/service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private es:Service) { }

  public loanForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    amount: new FormControl(0),
    dateofLoan: new FormControl(),
    tenure: new FormControl(),
    rateofIntrest:new FormControl()

  });

  ngOnInit() {
  }
  add() {
    
    this.es.addLoan(this.loanForm.value)
  }

}
