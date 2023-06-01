import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-do-you-want-logout-modal',
  templateUrl: './do-you-want-logout-modal.component.html',
  styleUrls: ['./do-you-want-logout-modal.component.scss']
})
export class DoYouWantLogoutModalComponent {
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {
  }
  cancel() {
    this.customerData.changeData({
      isDoYouWantToLogoutModalHidden: true,
      isTimeoutFinish: true
    }, 'uiData');
    this.customerData.changeData({}, 'systemData')
    this.customerData.changeData({}, 'existCustomerData')
    this.customerData.changeData({}, 'topUpData')
    this.customerData.changeData({}, 'submitEntriesData')
    this.customerData.changeData({}, 'currentEntriesData')
    clearTimeout(this.customerData.uiData.timeoutId)
    this.router.prevPages = [];
    this.router.routeToPage('choose-language');
  }

  noLogout() {
    this.customerData.changeData({
      isTimeoutFinish: false,
      isDoYouWantToLogoutModalHidden: true,
    }, 'uiData')
  }
}
