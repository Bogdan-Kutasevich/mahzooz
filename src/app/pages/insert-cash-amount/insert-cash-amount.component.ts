import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {CustomerDataService} from "../../services/data.service";
import {HttpService} from "../../services/http-service.service";
import {webSocket, WebSocketSubject} from "rxjs/webSocket";
@Component({
  selector: 'app-insert-cash-amount',
  templateUrl: './insert-cash-amount.component.html',
  styleUrls: ['./insert-cash-amount.component.scss']
})
export class InsertCashAmountComponent implements OnInit{
  public routeTo = 'successful-payment';
  public cashInserted: any = 50;
  private url: string = 'ws://localhost:8083';
  private socket$: WebSocketSubject<any>;

  private dataToConnectBillAcceptor = {
    'device_type': 'bill_acceptor',
    'method': 'cmd_start_accepting',
    'device': '0',
    'data': ['500','1000','2000','5000', '10000', '20000', '50000', '100000'],
  };

  private dataToStopAcceptingCash = {
    'device_type': 'bill_acceptor',
    'method': 'cmd_stop_accepting',
    'device': '0',
  }

  constructor(
    public router: RouterService,
    public customerData: CustomerDataService,
    private http: HttpService,
  ) {
    this.socket$ = webSocket({
      url: this.url,
      deserializer: (msg) => {
        return JSON.parse(msg.data);
      }
    });
  }

  ngOnInit() {
    this.onInsertCash()
    this.connectBillAcceptorMessage()
  }

  onInsertCash() {
    this.socket$.subscribe(
      {
        next: msg => {
          if (msg.event === 'STACKED') {
            this.cashInserted += msg.data.amount
          } else {
            //default behavior
            return;
          }
        },
        error: err => console.log(err),
        complete: () => console.log('complete')
      }
    )
  }
  connectBillAcceptorMessage(): void {
    console.log('start accepting')
    this.socket$.next(this.dataToConnectBillAcceptor);
  }

  stopAccepting() {
    console.log('stop accepting')
    this.socket$.next(this.dataToStopAcceptingCash)
  }

  addCashToBalance() {
    this.stopAccepting()
    console.log('start payment')
    this.customerData.changeData({isDataFetching: true}, 'uiData');
    this.http.cacheTopUp(this.cashInserted).subscribe({
      next: (data) => {
        console.log('topUpData:', data)
        this.customerData.changeData(data, 'topUpData');
        this.customerData.changeData({customerBalance: data.customerBalance}, 'existCustomerData');
        this.customerData.changeData({isDataFetching: false}, 'uiData');
        this.printCheck();
        this.router.routeToPage(this.routeTo);
      },
      error: (error) => {
        this.customerData.changeData({
          isDataFetching: false,
          isFetchingError: true,
          errorMessage: error.errorMessage,
        }, 'uiData')
        this.printCheck();
        this.router.routeToPage(this.customerData.uiData.errorPage)
      }
    })
  }

  printCheck() {

  }
}
