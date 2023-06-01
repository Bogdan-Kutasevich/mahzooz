import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-view-customer-balance',
  templateUrl: './view-customer-balance.component.html',
  styleUrls: ['./view-customer-balance.component.scss']
})
export class ViewCustomerBalanceComponent {
  public routeToPaymentCashRules = 'payment-cash-rules';
  public routeToBuyWater = 'buy-water';
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {}
}
