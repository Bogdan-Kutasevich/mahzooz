import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.scss']
})
export class SuccessfulPaymentComponent implements OnInit{
  constructor(private customerData: CustomerDataService) {}
  ngOnInit() {
    setTimeout(() => {
      this.customerData.exitSession()
    }, 4000)
  }
}
