import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent {
  constructor(
    public customerData: CustomerDataService,
    public router: RouterService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.customerData.changeData({
        isTimeoutFinish: true
      }, 'uiData');
      clearTimeout(this.customerData.uiData.timeoutId)
      this.router.prevPages = [];
      this.router.routeToPage('choose-language');
    }, 3000)
  }
}
