import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import { ChooseLanguagesComponent } from './pages/choose-languages/choose-languages.component';
import {RouterOutlet} from "@angular/router";
import { NavigateButtonComponent } from './components/navigate-button/navigate-button.component';
import { CustomerTypeComponent } from './pages/customer-type/customer-type.component';
import { CustomerMobileNumberComponent } from './pages/customer-mobile-number/customer-mobile-number.component';
import { ChooseCodeCountryComponent } from './pages/choose-code-country/choose-code-country.component';
import { ConfirmMobileNumberComponent } from './pages/confirm-mobile-number/confirm-mobile-number.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { NavigateButtonsComponent } from './components/navigate-buttons/navigate-buttons.component';
import { PhoneComponent } from './components/phone/phone.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ValidateCustomerMobileNumberComponent } from './pages/validate-customer-mobile-number/validate-customer-mobile-number.component';
import { ReverseCounterComponent } from './components/reverse-counter/reverse-counter.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { CompleteRegistrationComponent } from './pages/complete-registration/complete-registration.component';
import { ReceiveCommunicationOnSuccessfulRegistrationComponent } from './pages/receive-communication-on-successful-registration/receive-communication-on-successful-registration.component';
import { InvalidOtpComponent } from './pages/invalid-otp/invalid-otp.component';
import { ViewCustomerBalanceComponent } from './pages/view-customer-balance/view-customer-balance.component';
import { MaximumTriesExceededComponent } from './pages/maximum-tries-exceeded/maximum-tries-exceeded.component';
import { PaymentTypeComponent } from './pages/payment-type/payment-type.component';
import { ConfirmCashPaymentRulesComponent } from './pages/confirm-cash-payment-rules/confirm-cash-payment-rules.component';
import { InsertCashAmountComponent } from './pages/insert-cash-amount/insert-cash-amount.component';
import { SuccessfulPaymentComponent } from './pages/successful-payment/successful-payment.component';
import { BuyWaterBottleComponent } from './pages/buy-water-bottle/buy-water-bottle.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectLuckyNumbersComponent } from './pages/select-lucky-numbers/select-lucky-numbers.component';
import { AreYouHereComponent } from './pages/are-you-here/are-you-here.component';
import { TransactionCompleteComponent } from './pages/transaction-complete/transaction-complete.component';
import { PrintTicketReceiptComponent } from './pages/print-ticket-receipt/print-ticket-receipt.component';
import { AreYouHereModalComponent } from './components/are-you-here-modal/are-you-here-modal.component';
import { NumberNotRegisteredModalComponent } from './components/number-not-registered-modal/number-not-registered-modal.component';
import { NumberAlreadyExistModalComponent } from './components/number-already-exist-modal/number-already-exist-modal.component';
import { DoYouWantExitModalComponent } from './components/do-you-want-exit-modal/do-you-want-exit-modal.component';
import { DoYouWantLogoutModalComponent } from './components/do-you-want-logout-modal/do-you-want-logout-modal.component';
import { ChangeDrawDateModalComponent } from './components/change-draw-date-modal/change-draw-date-modal.component';
import { MyGameModalComponent } from './components/my-game-modal/my-game-modal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { OtpValidatorComponent } from './components/otp-validator/otp-validator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WebsocketService} from "./services/websocket.service";
@NgModule({
  declarations: [
    AppComponent,
    ChooseLanguagesComponent,
    NavigateButtonComponent,
    CustomerTypeComponent,
    CustomerMobileNumberComponent,
    ChooseCodeCountryComponent,
    ConfirmMobileNumberComponent,
    RegistrationComponent,
    CancelButtonComponent,
    NavigateButtonsComponent,
    PhoneComponent,
    RegistrationFormComponent,
    ValidateCustomerMobileNumberComponent,
    ReverseCounterComponent,
    TermsAndConditionsComponent,
    CompleteRegistrationComponent,
    ReceiveCommunicationOnSuccessfulRegistrationComponent,
    InvalidOtpComponent,
    ViewCustomerBalanceComponent,
    MaximumTriesExceededComponent,
    PaymentTypeComponent,
    ConfirmCashPaymentRulesComponent,
    InsertCashAmountComponent,
    SuccessfulPaymentComponent,
    BuyWaterBottleComponent,
    ModalComponent,
    SelectLuckyNumbersComponent,
    AreYouHereComponent,
    TransactionCompleteComponent,
    PrintTicketReceiptComponent,
    AreYouHereModalComponent,
    NumberNotRegisteredModalComponent,
    NumberAlreadyExistModalComponent,
    DoYouWantExitModalComponent,
    DoYouWantLogoutModalComponent,
    ChangeDrawDateModalComponent,
    MyGameModalComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ErrorPageComponent,
    OtpValidatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    PdfViewerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WebsocketService],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef) {
    const element = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('app-root', element)
  }
}
