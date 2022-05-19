import { Component, OnInit } from '@angular/core';
import { Service } from "src/app/service";

@Component({
  selector: 'app-remove-loan',
  templateUrl: './remove-loan.component.html',
  styleUrls: ['./remove-loan.component.css']
})
export class RemoveLoanComponent implements OnInit {

  constructor(private es: Service) { }
  public loan;
  ngOnInit() {
  }
  delete(id) {
    this.loan = this.es.deleteLoan(id);
  }

}
