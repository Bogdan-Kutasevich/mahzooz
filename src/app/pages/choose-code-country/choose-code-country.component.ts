import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-choose-code-country',
  templateUrl: './choose-code-country.component.html',
  styleUrls: ['./choose-code-country.component.scss']
})
export class ChooseCodeCountryComponent {
  public routeTo: string = 'customer-mobile-number';

  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {}
  chooseCode(code:number) {
    this.customerData.changeData({countryCode: code}, 'uiData')
    this.router.routeToPage(this.routeTo);
  }

  pageUp() {}
  pageDown() {}
}
