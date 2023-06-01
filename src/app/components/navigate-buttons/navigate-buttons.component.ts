import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
@Component({
  selector: 'app-navigate-buttons',
  templateUrl: './navigate-buttons.component.html',
  styleUrls: ['./navigate-buttons.component.scss']
})
export class NavigateButtonsComponent {
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {
  }
}
