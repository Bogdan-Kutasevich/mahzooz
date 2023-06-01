import {Component} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  public routeToConfirmPhoneNumberPage: string = 'confirm-mobile-number';
  public routeToRegistrationPage: string = 'registration';
  public routeToCountryCodePage: string = 'choose-country-code';
  public input: string = '';
  public isPhoneNumberEntered = false;
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
  ) {}

  navigateTo () {
    switch (this.customerData.uiData.customerType) {
      case 'exist':
        this.customerData.changeData({
          enteredPhoneNumber: '+' + this.customerData.uiData.countryCode + this.input
        }, 'uiData')
        this.router.routeToPage(this.routeToConfirmPhoneNumberPage)
        break;
      case 'new':
        this.customerData.changeData({
          enteredPhoneNumber: '+' + this.customerData.uiData.countryCode + this.input
        }, 'uiData')
        this.router.routeToPage(this.routeToRegistrationPage)
        break;
    }
  }
  validateEnteredNumber() {
    if (this.input.length === 9) {
      this.isPhoneNumberEntered = true;
      return;
    }
    this.isPhoneNumberEntered = false;
  }
  addNumber(currentNumber: string) {
    this.input = this.input + currentNumber;
    this.validateEnteredNumber()
  }
  clearNumber() {
    this.input = this.input.slice(0, this.input.length - 1)
    this.validateEnteredNumber()
  }
}
