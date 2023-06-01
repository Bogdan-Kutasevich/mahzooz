import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";

@Component({
  selector: 'app-abstract-page',
  templateUrl: './abstract-page.component.html',
  styleUrls: ['./abstract-page.component.scss']
})
export abstract class AbstractPageComponent {
  protected constructor(public router: RouterService) {}
}
