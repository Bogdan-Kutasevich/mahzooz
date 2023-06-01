import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  public pdfSrc = '../../../assets/pdfs/2021.04.13 Terms and Conditions -  v2 FINAL - CLEAN.pdf'
  public currentPage = 1;
  constructor(
    public router: RouterService,
    private scroller: ViewportScroller
  ) {
  }

  pageDown() {
    this.currentPage += 1;
  }

  pageUp() {
    this.currentPage -= 1;
  }
}
