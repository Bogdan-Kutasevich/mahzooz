import {Component} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
import {HttpService} from "../../services/http-service.service";
@Component({
  selector: 'app-confirm-mobile-number',
  templateUrl: './confirm-mobile-number.component.html',
  styleUrls: ['./confirm-mobile-number.component.scss']
})
export class ConfirmMobileNumberComponent {
  public number: string = '';
  public routeToRegistrationPage = 'registration';
  public routeToValidate = 'validate-customer-mobile-number';
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
    private http: HttpService,
  ) {}

  confirm() {
    this.customerData.changeData({isDataFetching: true}, 'uiData')
    this.http.verifyCustomerExistence().subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this.customerData.changeData(data, 'existCustomerData')
          this.customerData.changeData({
            customerBalance: this.customerData.existCustomerData.customerBalance/100
          }, 'existCustomerData')
          switch (this.customerData.uiData.customerType) {
            case 'new':
              this.customerData.uiData.changeData({
                customerType: 'exist',
                isNumberAlreadyExistModalHidden: false,
              }, 'uiData')
              this.router.routeToPage(this.routeToValidate)
              break
            case 'exist':
              this.router.routeToPage(this.routeToValidate)
              break
          }
          this.customerData.changeData({isDataFetching: false}, 'uiData')
        }
        console.log(data)
      },
      error: (error) => {
        switch (this.customerData.uiData.customerType) {
          case 'new':
            this.router.routeToPage(this.routeToRegistrationPage)
            break
          case 'exist':
            this.customerData.changeData({
              customerType: 'new',
              isNumberNotRegisteredModalHidden: false,
            }, 'uiData')
            this.router.routeToPage(this.routeToRegistrationPage)
            break
        }
        this.customerData.changeData({isDataFetching: false}, 'uiData')
        console.log(error)
      }
    })
  }
}
