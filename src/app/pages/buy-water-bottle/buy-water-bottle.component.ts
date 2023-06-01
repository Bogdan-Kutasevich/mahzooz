import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";

@Component({
  selector: 'app-buy-water-bottle',
  templateUrl: './buy-water-bottle.component.html',
  styleUrls: ['./buy-water-bottle.component.scss']
})
export class BuyWaterBottleComponent implements OnInit{
  public routeTo = 'select-lucky-numbers'
  public currentModalText = '';
  public isModalHidden = true;
  public currentBottleCount = 0;
  constructor(
    public router: RouterService,
    public customerData: CustomerDataService
  ) {}

  ngOnInit() {
    this.customerData.changeData({countOfBottles: 0}, 'uiData')
  }

  addBottle() {
    if (
      this.customerData.existCustomerData.customerBalance
      - this.currentBottleCount
      * this.customerData.uiData.pricePerBottle
      < this.customerData.uiData.pricePerBottle
    ) {
      this.toggleModal(this.currentBottleCount, 'enough-credit');
      return;
    }

    if (
      this.currentBottleCount >= 5
    ) {
      this.toggleModal(this.currentBottleCount, 'limit-exceeded');
      return;
    }
    this.currentBottleCount += 1;
  }

  removeBottle() {
    if(this.currentBottleCount > 0) {
      this.currentBottleCount -= 1;
    }
  }

  addToCart() {
    this.customerData.changeData({
      countOfBottles: this.customerData.uiData.countOfPurchasedBottles + this.currentBottleCount,
    }, 'uiData')

    this.router.routeToPage(this.routeTo)
  }

  toggleModal(bottlesCount?: number, errorType?: string) {
    if (!errorType) {
      this.isModalHidden = !this.isModalHidden
      return;
    }
    switch (errorType) {
      case 'enough-credit':
        this.currentModalText = `You don't have enough credit to Buy more than ${bottlesCount} Bottle`;
        break;
      case 'limit-exceeded':
        this.currentModalText = 'Bottle selection limit exceeded ! Only 5 bottles can be selected at a time';
        break;
      default: this.currentModalText = 'Unexpected Error, please try again.'
    }
    this.isModalHidden = !this.isModalHidden
  }
}
