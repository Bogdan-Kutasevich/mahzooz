import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerDataService} from "./data.service";
import {forkJoin, zip} from 'rxjs';

const kioskId = 'kiosk12345';
const kioskLoc = 'Dubai';

interface Line {
  title: string;
  numbers: number[];
  RaffleID?: number;
}
interface SelfAuth {
  contactNumber: string
  jwtToken: string
  merchantId: string
  merchantName: string
  pushedFO: boolean
  role: string
  statusCode: number
}

interface RegistrationForm {
  username:"username",
  gender:"f",
  first_name:"Firstname",
  last_name:"Lastname",
  phone:"971551111111",
  email_address:"ussample@test.com",
  country_id:"ae",
  nationality_id:"in",
  birthdate:"1980-01-01",
  street:"UBORA Tower",
  street2:"Marsi Drive",
  city:"Dubai",
  zip:"00000",
  notify_newsletter:"1",
  adult_checkbox:"1",
}

interface SendOtp {
  message: string
  status: number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:16080/mahzooz';

  constructor(
    private http: HttpClient,
    private customerData: CustomerDataService,
  ){}

  authenticateSelf(){
    const body = {
      type: 'authenticateSelf',
      data: {
        kioskId,
        kioskLoc
      }
    }

    return this.http.post<any>(this.baseUrl, body)
  }

  verifyCustomerExistence(){
    const body = {
      type: 'verifyCustomerExistence',
      data: {
        mobileNumber: this.customerData.uiData.enteredPhoneNumber,
        jwtToken: this.customerData.authData.jwtToken
      }
    }

    return this.http.post<any>(this.baseUrl, body)
  }

  sendOtp(){
    const body = {
      type: 'sendOtp',
      data: {
        mobileNumber: this.customerData.uiData.enteredPhoneNumber,
        jwtToken: this.customerData.authData.jwtToken
      }
    }
    return this.http.post<any>(this.baseUrl, body)
  }

  verifyOtp(otpNumber: string) {
    const body = {
      type: 'verifyOtp',
      data: {
        mobileNumber: this.customerData.uiData.enteredPhoneNumber,
        otpNumber: otpNumber,
        jwtToken: this.customerData.authData.jwtToken
      }
    }
    return this.http.post<any>(this.baseUrl, body)
  }

  register(form: RegistrationForm) {
    const passwd = '$' + Math.random().toString(36).slice(-9);
    const confirm_passwd = passwd;
    const notify_newsletter = form.notify_newsletter ? 1 : 0;
    const adult_checkbox = form.adult_checkbox ? 1 : 0;

    const body = {
      type: 'register',
      data: {
        jwtToken: this.customerData.authData.jwtToken,
        language_id: this.customerData.uiData.choseLang,
        passwd,
        confirm_passwd,
        ...form,
        notify_newsletter,
        adult_checkbox
      }
    }

    console.log(body.data)

    return this.http.post<any>(this.baseUrl, body)
  }

  getSystem(){
    const body = {
      type: 'getSystem',
      data: {
        jwtToken: this.customerData.authData.jwtToken,
      }
    }

    return this.http.post<any>(this.baseUrl, body)
  }

  getSubmittedEntries(){
    const body = {
      type: 'getSubmittedEntries',
      data: {
        customer_id: this.customerData.existCustomerData.customerId,
        phone_number: this.customerData.uiData.enteredPhoneNumber,
        jwtToken: this.customerData.authData.jwtToken,
        page:1,
        per_page:5
      }
    }

    return this.http.post<any>(this.baseUrl, body)
  }

  cacheTopUp(transactionAmount: number) {
    const timeElapsed = Date.now();
    const now = new Date(timeElapsed)
      .toISOString()
      .replace('T', ' ')
      .slice(0, 19)

    const body = {
      type: 'cacheTopUp',
      data: {
        customer_id: this.customerData.existCustomerData.customerId,
        phone_number: this.customerData.uiData.enteredPhoneNumber,
        transactionAmount,
        transactionCurrency: 'AED',
        kioskTransactionId: 'PAYNETKIOSK23453555412347',
        merchantId: this.customerData.existCustomerData.merchantId,
        transactionDate: now,
        payment: {
          'type': 'CASH'
        },
        jwtToken: this.customerData.authData.jwtToken,
      }
    }

    console.log(body)

    return this.http.post<any>(this.baseUrl, body)
  }

  submitEntries(selectedLines: Line[]) {
    const requests = [];
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed)
      .toISOString()
      .replace('T', ' ')
      .slice(-4);

    const requests$ = selectedLines.map(currentLine => {
      const body = {
        type: 'submitEntries',
        data: {
          transaction_id:'PAYNETKIOSK2354244654675637',
          transaction_date: today,
          customer_id: this.customerData.existCustomerData.customerId,
          phone_number: this.customerData.uiData.enteredPhoneNumber,
          tips: currentLine,
          product_id:'102',
          first_draw_id:'101',
          jwtToken: this.customerData.authData.jwtToken,
        }
      }
      return this.http.post<any>(this.baseUrl, body)
    })
    //Code below is another way to send many request
    // forkJoin([
    //   ...requests$
    // ])

    return zip(...requests$)
  }
}
