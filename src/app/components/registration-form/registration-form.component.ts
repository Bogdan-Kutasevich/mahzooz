import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpService} from "../../services/http-service.service";
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  public formsFields = [
    {title: 'Mobile Number', isRequired: true, fieldNameForRequest: 'phone'},
    {title: 'First Name', isRequired: true, fieldNameForRequest: 'first_name'},
    {title: 'User Name', isRequired: true, fieldNameForRequest: 'username'},
    {title: 'Date of Birth', isRequired: true, fieldNameForRequest: 'birthdate'},
    {title: 'Residential Address', isRequired: true, fieldNameForRequest: 'street'},
    {title: 'Residential Address 2', isRequired: false, fieldNameForRequest: 'street2'},
    {title: 'ZIP/Postal', isRequired: false, fieldNameForRequest: 'zip'},
    {title: 'Email', isRequired: true, fieldNameForRequest: 'email_address'},
    {title: 'Last Name', isRequired: true, fieldNameForRequest: 'last_name'},
    {title: 'Gender', isRequired: true, fieldNameForRequest: 'gender'},
    {title: 'Town/City', isRequired: true, fieldNameForRequest: 'city'},
    {title: 'Nationality', isRequired: true, fieldNameForRequest: 'nationality_id'},
    {title: 'Country of Residence', isRequired: true, fieldNameForRequest: 'country_id'},
  ]

  public acceptAdd = {title: 'acceptAdd', isRequired: true, fieldNameForRequest: 'acceptAdd'};
  public acceptTerms = {title: 'acceptTerms', isRequired: true, fieldNameForRequest: 'acceptTerms'};

  public routeToValidate = 'validate-customer-mobile-number';
  public routeToTermsAndConditions = 'terms-and-conditions';
  public routeToRules = 'rules';
  public routeToPolicy = 'policy';
  public routeToCompleteRegistration = 'complete-registration';

  public isFetchingData:boolean = false;
  public isError:boolean = false;

  myForm : FormGroup = new FormGroup({
    "email_address": new FormControl("", Validators.email),
    "adult_checkbox": new FormControl("", ),
    "notify_newsletter": new FormControl("", ),
    "first_name": new FormControl("", ),
    "username": new FormControl("", [
      Validators.pattern("[A-Za-z0-9\_]+"),
      Validators.min(4)
    ]),
    "birthdate": new FormControl("", Validators.pattern("(?:19\\d{2}|20[01][0-9]|2020)[-\-.](?:0[1-9]|1[012])[-\-.](?:0[1-9]|[12][0-9]|3[01])\\b")),
    "street": new FormControl("", ),
    "street2": new FormControl("", ),
    "zip": new FormControl("", ),
    "last_name": new FormControl("", ),
    "city": new FormControl("", ),
    "nationality_id": new FormControl("",  ),
    "country_id": new FormControl("",  ),
    "phone": new FormControl("", ),
    "gender": new FormControl("", [
      Validators.pattern("[fmu]"),
      Validators.min(1)
    ]),
  });
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
    private http: HttpService,
  ) {
  }

  onSubmit(){
    this.customerData.changeData({
      isDataFetching: true
    }, 'uiData');
      this.http.register(this.myForm.value).subscribe({
        next: (data) => {
          this.customerData.changeData(data, 'registrationData')
          this.customerData.changeData({
            isDataFetching: true
          }, 'uiData');
          console.log(data)
          this.router.routeToPage(this.routeToValidate);
        },
        error: (error) => {
          this.customerData.changeData({
            isDataFetching: false,
            isFetchingError: true,
            errorMessage: error.errorMessage,
          }, 'uiData');
          //there need to check error validation fields and show invalidate field to user
          this.router.routeToPage('registration')
        }
      });
  }
}
