import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-are-you-here-modal',
  templateUrl: './are-you-here-modal.component.html',
  styleUrls: ['./are-you-here-modal.component.scss']
})
export class AreYouHereModalComponent {
  public routeTo = 'choose-language';
  public seconds = 10;
  public interval: number = 0;
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.seconds === 0) {
        window.clearInterval(this.interval)
        this.customerData.exitSession()
        this.customerData.changeData({isAreYouHereModalHidden: true}, 'uiData')
        return;
      }
      this.seconds = this.seconds - 1
    }, 1000)
  }

  yes() {
    clearInterval(this.interval)
    this.customerData.changeData({
      isTimeoutFinish: false,
      isAreYouHereModalHidden: true,
    }, 'uiData')
  }

  no() {
    clearInterval(this.interval)
    this.customerData.changeData({isAreYouHereModalHidden: true}, 'uiData')
    this.customerData.exitSession()
  }
}
