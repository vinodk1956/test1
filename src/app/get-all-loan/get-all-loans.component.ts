import { Component, OnInit } from '@angular/core';
import { Service } from "src/app/service";

@Component({
  selector: 'app-get-all-loans',
  templateUrl: './get-all-loans.component.html',
  styleUrls: ['./get-all-loans.component.css']
})
export class GetAllLoansComponent implements OnInit {

constructor(private es: Service) { }

  public Loan=[]

  ngOnInit() {
    this.Loan=this.es.getAllLoans();
  }

}
