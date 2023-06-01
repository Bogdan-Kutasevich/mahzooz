import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(public customerData: CustomerDataService) {
  }
}
