import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseLanguagesComponent} from "./pages/choose-languages/choose-languages.component";
import {CustomerTypeComponent} from "./pages/customer-type/customer-type.component";
import {CustomerMobileNumberComponent} from "./pages/customer-mobile-number/customer-mobile-number.component";
import {ChooseCodeCountryComponent} from "./pages/choose-code-country/choose-code-country.component";
import {ConfirmMobileNumberComponent} from "./pages/confirm-mobile-number/confirm-mobile-number.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  { path: '', component: ChooseLanguagesComponent },
  { path: 'customer-type', component: CustomerTypeComponent },
  { path: 'customer-mobile-number', component: CustomerMobileNumberComponent },
  { path: 'choose-country-code', component: ChooseCodeCountryComponent },
  { path: 'confirm-mobile-number', component: ConfirmMobileNumberComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
