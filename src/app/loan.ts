export class Loan {

    constructor(
        public loanId:number,public loanCustomerName:string,
        public loanAmount:number,public dateOfLoan:string,
        public tenure:string,public rateOfInterest:number
    ){
    }
}
