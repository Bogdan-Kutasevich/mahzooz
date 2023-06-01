import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.scss']
})
export class NavigateButtonComponent implements OnInit {
  public currentPage: string = ''
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {}

  ngOnInit() {
    this.router.currentPage.subscribe(page => this.currentPage = page)
  }

  goBack() {
    if(this.currentPage === 'view-customer-balance') {
      this.customerData.changeData({
        isDoYouWantToLogoutModalHidden: false
      }, 'uiData')
      return;
    }
    this.router.routeBack()
  }
}
