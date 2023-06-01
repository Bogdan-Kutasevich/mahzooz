import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent {
  constructor(
    public customerData: CustomerDataService,
  ) {}

  cancel() {
    this.customerData.exitSession()
    return;
  }
}
