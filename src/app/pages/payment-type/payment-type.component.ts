import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent {
  public routeTo = 'payment-cash-rules'

  constructor(public router: RouterService) {
  }
}
