import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-do-you-want-exit-modal',
  templateUrl: './do-you-want-exit-modal.component.html',
  styleUrls: ['./do-you-want-exit-modal.component.scss']
})
export class DoYouWantExitModalComponent {
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {
  }
  cancel() {
    this.customerData.changeData({
      isDoYouWantToExitModalHidden: true,
      isTimeoutFinish: true
    }, 'uiData');
    clearTimeout(this.customerData.uiData.timeoutId)
    this.router.prevPages = [];
    this.router.routeToPage('choose-language');
  }

  noLogout() {
    this.customerData.changeData({
      isTimeoutFinish: false,
      isDoYouWantToExitModalHidden: true,
    }, 'uiData')
  }
}
