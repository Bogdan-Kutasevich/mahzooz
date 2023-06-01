import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent {
  public routeToPage: string = 'customer-mobile-number'
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {}

  changeCustomerType(customerType: 'new' | 'exist') {
    this.customerData.changeData({
      customerType: customerType
    }, 'uiData')
    this.router.routeToPage(this.routeToPage)
  }
}
