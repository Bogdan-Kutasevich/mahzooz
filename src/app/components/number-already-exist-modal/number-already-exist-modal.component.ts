import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-number-already-exist-modal',
  templateUrl: './number-already-exist-modal.component.html',
  styleUrls: ['./number-already-exist-modal.component.scss']
})
export class NumberAlreadyExistModalComponent {
  constructor(public customerData: CustomerDataService) {
  }
}
