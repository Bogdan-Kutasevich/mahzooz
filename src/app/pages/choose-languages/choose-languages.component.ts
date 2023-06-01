import {Component} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {HttpService} from "../../services/http-service.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-choose-languages',
  templateUrl: './choose-languages.component.html',
  styleUrls: ['./choose-languages.component.scss']
})
export class ChooseLanguagesComponent {
  public routeTo: string = 'customer-type';
  constructor(
    public router: RouterService,
    private http: HttpService,
    public customerData: CustomerDataService,
  ) {}
  chooseLangAndAuth(choseLang: string) {
    this.customerData.changeData({
      isDataFetching: true
    }, 'uiData');

    this.http.authenticateSelf().subscribe({
      next: (data) => {
        console.log(data)
        this.customerData.changeData(data, 'authData')
        this.customerData.changeData({
          isDataFetching: false
        }, 'uiData');
        this.router.routeToPage(this.routeTo)
      },
      error: (error) => {
        console.log(error)
        this.customerData.changeData({
          isDataFetching: false,
          isFetchingError: true,
          errorMessage: error.errorMessage,
        }, 'uiData');

        this.router.routeToPage(this.customerData.uiData.errorPage)
      }
    })
    this.customerData.changeData({
      isTimeoutFinish: false,
      choseLang: 'en',
    }, 'uiData')
  }
}
