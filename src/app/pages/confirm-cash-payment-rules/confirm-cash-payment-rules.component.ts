import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";

@Component({
  selector: 'app-confirm-cash-payment-rules',
  templateUrl: './confirm-cash-payment-rules.component.html',
  styleUrls: ['./confirm-cash-payment-rules.component.scss']
})
export class ConfirmCashPaymentRulesComponent {
  public routeTo = 'insert-cash-amount'
  constructor(public router: RouterService) {
  }
}
