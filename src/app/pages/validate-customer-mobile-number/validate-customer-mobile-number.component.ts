import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-validate-customer-mobile-number',
  templateUrl: './validate-customer-mobile-number.component.html',
  styleUrls: ['./validate-customer-mobile-number.component.scss']
})
export class ValidateCustomerMobileNumberComponent implements OnInit{
  public routeTo = '';

  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {}
  ngOnInit() {
    switch (this.customerData.uiData.customerType) {
      case "new": this.routeTo = 'registration';
        break;
      case "exist": this.routeTo = 'view-customer-balance';
        break;
    }
  }
}
