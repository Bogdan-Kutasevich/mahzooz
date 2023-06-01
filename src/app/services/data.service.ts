import { Injectable } from '@angular/core';
interface UiData {
  isTimeoutFinish: boolean
  timeoutId: number
  choseLang: 'string'
  isDataFetching: boolean
  isFetchingError: boolean
  errorPage: string
  customerType: 'new' | 'exist'
  enteredPhoneNumber: string
  countryCode: number
}

interface Line {
  title: string;
  numbers: number[];
  RaffleID?: number;
}

interface YourGame {
  date: string;
  numberOfLines: number;
  isProceed: boolean;
  lines: Line[];
}
@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  public langList = ['English', 'Arabic', 'Hindi', 'Malayalam', 'Urdu'];
  public uiData: any = {
    //appComponent
    isTimeoutFinish: true,
    timeoutId: 0,

    //chooseLangPage
    choseLang: 'en',

    //Fetching data ui
    isDataFetching: false,
    isFetchingError: false,
    errorPage: 'error',
    errorMessage: 'Something went wrong. Try again later',

    //Customer type ui
    customerType: 'new',

    //PhoneComponent
    enteredPhoneNumber: '+971525218949',
    countryCode: 971,

    //ModalWindows
    isNumberAlreadyExistModalHidden: true,
    isNumberNotRegisteredModalHidden: true,
    isChangeDrawDateModalHidden: true,
    isMyGameModalHidden: true,
    isAreYouHereModalHidden: true,
    isDoYouWantToExitModalHidden: true,
    isDoYouWantToLogoutModalHidden: true,

    //OTP Validate
    isOtpSendSuccessful: false,
    countTriesToOtp: 3,
    otpNumber: '',

    //BuyWaterPage
    pricePerBottle: 35,
    countOfPurchasedBottles: 0,

    //SelectLuckyNumber
    purchaseCost: 0,
    linesLeft: 0,
    currentDrawDate: '',

    jwtToken: null,
  }

  public authData: any = {}
  public systemData: any = {}
  public existCustomerData: any = {}
  public topUpData: any = {}
  public submitEntriesData: any = {}
  public currentEntriesData: any | null = null
  public registrationData: any = {}

  public chooseLines: Line[] = [];
  public yourGames: YourGame[] = [];

  changeData(data: object, dataType: string) {
    switch (dataType) {
      case 'uiData': this.uiData = {...this.uiData, ...data}
        break;
      case 'authData': this.authData = {...this.authData, ...data}
        break;
      case 'systemData': this.systemData = {...this.systemData, ...data}
        break;
      case 'existCustomerData': this.existCustomerData = {...this.existCustomerData, ...data}
        break;
      case 'currentEntriesData': this.currentEntriesData = {...this.currentEntriesData, ...data}
        break;
      case 'topUpData': this.topUpData = {...this.topUpData, ...data}
        break;
      case 'submitEntriesData': this.submitEntriesData = {...this.submitEntriesData, ...data}
        break;
      case 'registrationData': this.registrationData = {...this.registrationData, ...data}
        break;
      default:
        this.uiData = {...this.uiData, ...data}
    }
  }

  exitSession() {
    window.location.href = "/"
  }

  public listOfCountries = [
    {
      countryName: 'United Arab Emirates',
      countryCode: 971
    },
    {
      countryName: 'India',
      countryCode: 767
    },
    {
      countryName: 'Nepal',
      countryCode: 987
    },
    {
      countryName: 'Pakistan',
      countryCode: 817
    },
    {
      countryName: 'Aruba',
      countryCode: 655
    },
  ]
}
