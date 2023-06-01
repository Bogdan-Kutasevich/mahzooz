import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
import {HttpService} from "../../services/http-service.service";

@Component({
  selector: 'app-otp-validator',
  templateUrl: './otp-validator.component.html',
  styleUrls: ['./otp-validator.component.scss']
})
export class OtpValidatorComponent implements OnInit{
  public routeToViewCustomerBalance: string = 'view-customer-balance';
  public routeToCompleteRegistration: string = 'complete-registration';
  public routeToInvalidOtpPage: string = 'invalid-otp';
  public routeToMaximumTriesExceeded: string = 'maximum-tries-exceeded';

  public input: string = '';
  public isOtpNumberEntered = false;
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
    private http: HttpService,
  ) {}

  ngOnInit() {
    this.sendOtp()
  }

  sendOtp() {
    this.http.sendOtp().subscribe({
      next: (data) => {
        console.log(data)
        this.customerData.changeData({isOtpSendSuccessful: true}, 'uiData')
      },
      error: (error) => {
        this.router.routeToPage(this.customerData.uiData.errorPage)
        console.log(error)
      }
    })
  }

  verifyOtp() {
    if (this.customerData.uiData.countTriesToOtp <= 0) {
      this.router.routeToPage(this.routeToMaximumTriesExceeded)
      return;
    }

    this.customerData.changeData({
      countTriesToOtp: this.customerData.uiData.countTriesToOtp - 1,
      isDataFetching: true,
    }, 'uiData')

    this.http.verifyOtp(this.input).subscribe({
      next: (data) => {
        switch (this.customerData.uiData.customerType) {
          case "new":
            this.router.routeToPage(this.routeToCompleteRegistration);
            break;
          case "exist":
            this.router.routeToPage(this.routeToViewCustomerBalance);
            break;
        }
        this.customerData.changeData({isDataFetching: false}, 'uiData')
        console.log(data)
      },
      error: (error) => {
        this.customerData.changeData({isDataFetching: false}, 'uiData')
        this.router.routeToPage(this.routeToInvalidOtpPage);
        console.log(error)
      }
    })
  }
  validateEnteredNumber() {
    if (this.input.length === 6) {
      this.isOtpNumberEntered = true;
      return;
    }
    this.isOtpNumberEntered = false;
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
