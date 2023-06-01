import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

interface Settings {
  countryCode: number,
  lang: string,
  phoneNumber: string,
  isPhoneValidate: boolean,
  isCustomerExist: boolean,
  otpAttemptsCount: number,
}
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public currentPage: BehaviorSubject<string> = new BehaviorSubject<string>('choose-language')
  public prevPages:Array<string> = ['choose-language'];
  routeToPage(page: string) {
    const prevPage = this.currentPage.value
    this.prevPages.push(prevPage)
    this.currentPage.next(page)
  }
  routeBack() {
    const prevPage = this.prevPages.pop()
    if (prevPage) {
      this.currentPage.next(prevPage)
    }
  }
}
