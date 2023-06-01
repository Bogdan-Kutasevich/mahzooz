import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  public errorMessage = this.customerData.uiData.errorMessage;

  constructor(public customerData: CustomerDataService) {
  }
}
