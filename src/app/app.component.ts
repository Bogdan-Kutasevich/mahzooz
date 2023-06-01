import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {RouterService} from "./services/router.service";
import {CustomerDataService} from "./services/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {
  title = 'mahzooz';
  public currentPage: string = '';
  private timeout: number = 0;
  private mainContainer: Element | null = null;
  private milliSecondsToRemain = 60000;

  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {
  }
  public ngOnInit(): void {
    this.router.currentPage.subscribe(page => this.currentPage = page);
  }
  ngDoCheck() {
    // this.timeout = this.customerData.uiData.timeoutId
    // if (!this.customerData.uiData.isTimeoutFinish) {
    //   this.addGlobalClickListener()
    //   this.removeTimer()
    //   this.startTimer()
    // }
  }
  addGlobalClickListener() {
    this.mainContainer = document.querySelector(".main-container")
    if (this.mainContainer) {
      this.mainContainer.addEventListener('click', this.removeTimer)
    }
  }
  deleteGlobalClickListener() {
    if (this.mainContainer) {
      this.mainContainer.removeEventListener('click', this.removeTimer)
    }
  }
  startTimer() {
    this.customerData.uiData.timeoutId = setTimeout(() => {
      this.customerData.uiData.isTimeoutFinish = true;
      this.customerData.uiData.isAreYouHereModalHidden = false;
    }, this.milliSecondsToRemain)
  }
  removeTimer() {
    clearTimeout(this.timeout)
  }
  ngOnDestroy() {
    this.removeTimer();
    this.deleteGlobalClickListener();
  }
}
