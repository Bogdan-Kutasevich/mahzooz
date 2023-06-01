import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-number-not-registered-modal',
  templateUrl: './number-not-registered-modal.component.html',
  styleUrls: ['./number-not-registered-modal.component.scss']
})
export class NumberNotRegisteredModalComponent {
  constructor(public customerData: CustomerDataService) {
  }
}
