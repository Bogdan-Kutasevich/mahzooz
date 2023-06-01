import { Component } from '@angular/core';
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-change-draw-date-modal',
  templateUrl: './change-draw-date-modal.component.html',
  styleUrls: ['./change-draw-date-modal.component.scss']
})
export class ChangeDrawDateModalComponent {
  public nextDraws = this.customerData.systemData.next_draws['102']
  constructor(public customerData: CustomerDataService) {}

  closeModal() {
    this.customerData.changeData({isChangeDrawDateModalHidden: true}, 'uiData')
  }

  changeDate(currentDate: string) {
    this.customerData.changeData({currentDrawDate: currentDate}, 'uiData')
    this.customerData.changeData({isChangeDrawDateModalHidden: true}, 'uiData')
  }
}
