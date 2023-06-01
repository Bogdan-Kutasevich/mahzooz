import {Component, OnInit} from '@angular/core';
import {CustomerDataService} from "../../services/data.service";
import {RouterService} from "../../services/router.service";
import {HttpService} from "../../services/http-service.service";
interface Line {
  title: string;
  numbers: number[];
}
@Component({
  selector: 'app-select-lucky-numbers',
  templateUrl: './select-lucky-numbers.component.html',
  styleUrls: ['./select-lucky-numbers.component.scss']
})
export class SelectLuckyNumbersComponent implements OnInit{
  public routeTo = 'view-customer-balance';
  public routeToTransactionComplete = 'transaction-complete'
  public routeToErrorPage = 'error'
  public numbers: number[] = [];
  public currentLuckyNumbers: number[] = []
  public isCurrentLuckyNumbersCompleted = false;
  public isCurrentLuckyNumbersExist = false;

  constructor(
    public customerData: CustomerDataService,
    public router: RouterService,
    private http: HttpService,
  ) {}

  ngOnInit() {
    this.fillNumbersArr()
    this.customerData.changeData({
      purchaseCost: this.customerData.chooseLines.length * this.customerData.uiData.pricePerBottle,
    }, 'data')
    this.customerData.uiData.linesLeft = this.customerData.uiData.countOfPurchasedBottles - this.customerData.chooseLines.length
    console.log('select numbers page onInit')

    this.customerData.changeData({isDataFetching: true}, 'uiData');

    this.http.getSystem().subscribe({
      next: (system) => {
        this.customerData.changeData(system.data, 'systemData');
        this.customerData.changeData({
          currentDrawDate: this.customerData.systemData.next_draws['102'][0].draw_date
        }, 'uiData');

        this.http.getSubmittedEntries().subscribe({
          next: (data) => {
            this.customerData.changeData(data, 'submitEntriesData')
            //there need to add data about game into data service your games
            console.log('submitData:', data)
          },
          error: (error) => {
            this.customerData.changeData({
              isFetchingError: true,
            }, 'uiData')
            console.log(error)
            this.router.routeToPage(this.customerData.uiData.errorPage)
          }
        })

        this.customerData.changeData({isDataFetching: false}, 'uiData');
        console.log('system data:', system.data)
      },
      error: (error) => {
        this.customerData.changeData({
          isDataFetching: false,
          isFetchingError: true,
        }, 'uiData');
        console.log(error)
        this.router.routeToPage(this.routeToErrorPage)
      }
    })
  }

  fillNumbersArr() {
    for (let i = 1; i<= 49; i++) {
      this.numbers.push(i)
    }
  }

  addNumber(currentNumber: number) {
    if (this.currentLuckyNumbers.length < 5) {
      this.currentLuckyNumbers.push(currentNumber)
    }

    if (this.currentLuckyNumbers.length >= 5) {
      this.isCurrentLuckyNumbersCompleted = true
    }

    if (this.currentLuckyNumbers.length) {
      this.isCurrentLuckyNumbersExist = true;
    }
  }

  clearCurrentNumbers() {
    this.currentLuckyNumbers = [];
    this.isCurrentLuckyNumbersCompleted = false;
    this.isCurrentLuckyNumbersExist = false;
  }

  addLine() {
    if(this.customerData.chooseLines.length >= 5) {
      const newLine = {
        title: 'Line',
        numbers: this.currentLuckyNumbers,
      };

      this.customerData.chooseLines = [...this.customerData.chooseLines, newLine];
      this.currentLuckyNumbers = [];
      this.isCurrentLuckyNumbersCompleted = false;
      this.isCurrentLuckyNumbersExist = false;
      this.customerData.changeData({
        linesLeft: this.customerData.uiData.linesLeft - 1,
        purchaseCost: this.customerData.uiData.purchaseCost + this.customerData.uiData.pricePerBottle,
      }, 'data');
    }
  }

  editLine(editingLineNumbers: number[], i: number) {
    this.currentLuckyNumbers = editingLineNumbers;
    this.customerData.chooseLines =  this.customerData.chooseLines.filter((line, index) => index !== i)
    this.isCurrentLuckyNumbersCompleted = true;
    this.isCurrentLuckyNumbersExist = true;
  }

  deleteLine(i: number) {
    this.customerData.chooseLines =  this.customerData.chooseLines.filter((line, index) => index !== i)
    this.customerData.changeData({
      linesLeft: this.customerData.uiData.linesLeft + 1,
      purchaseCost: this.customerData.uiData.purchaseCost - this.customerData.uiData.pricePerBottle,
    }, 'data');
  }

  randomizeLine() {
    this.currentLuckyNumbers = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 49) + 1
      this.currentLuckyNumbers.push(randomNumber)
    }
    this.isCurrentLuckyNumbersCompleted = true;
    this.isCurrentLuckyNumbersExist = true;
  }

  addMore() {
    this.router.routeToPage(this.routeTo)
  }

  checkout() {
    if (this.customerData.existCustomerData.customerBalance >= this.customerData.uiData.purchaseCost) {
      //make transaction api for all lines
      this.customerData.changeData({isDataFetching: true}, 'uiData')
      this.http.submitEntries(this.customerData.chooseLines).subscribe({
        next: (data) => {
          this.customerData.changeData(data, 'submitEntriesData')
          this.customerData.changeData({isDataFetching: true}, 'uiData')
          console.log(data)
        },
        error: (error) => {
          this.customerData.changeData({
            isDataFetching: false,
            isFetchingError: true,
          }, 'uiData');
          console.log(error)
          this.router.routeToPage(this.routeToErrorPage)
        }
      })
      this.customerData.chooseLines = [];
      this.router.routeToPage(this.routeToTransactionComplete)
    }
  }
}
