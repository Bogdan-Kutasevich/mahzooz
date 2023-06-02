import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-transaction-complete',
  templateUrl: './transaction-complete.component.html',
  styleUrls: ['./transaction-complete.component.scss']
})
export class TransactionCompleteComponent implements OnInit{
  public isTicketPrinting = false;

  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {
  }
  ngOnInit() {
    setTimeout(() => {
      this.isTicketPrinting = true
      this.printingTicket()
    }, 2000)
  }

  printingTicket() {
    setTimeout(() => {
      this.customerData.changeData({
        isTimeoutFinish: true
      }, 'uiData');
      clearTimeout(this.customerData.uiData.timeoutId)
      this.router.prevPages = [];
      this.customerData.exitSession();
    }, 5000)
  }

  printTicket() {

  }
}
