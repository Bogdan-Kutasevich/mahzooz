import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private topUpUrl: string = 'ws://localhost:8083';
  private socket$: WebSocketSubject<any>;
  private data = {
    'device_type': 'bill_acceptor',
    'method': 'cmd_start_accepting',
    'device': 0
  };


  constructor() {
    this.socket$ = webSocket(this.topUpUrl);
  }

  sendMessage(): void {
    console.log('sending data to connect')
    this.socket$.next(this.data);
    this.socket$.error((err:any) => console.log(err));
  }

  receiveMessage(): Observable<any> {
    return this.socket$.asObservable();
  }

  // public command(command: string) {
  //   let sendingData: any = {
  //     'device_type': 'bill_acceptor',
  //     'method': command,
  //     'device': 0
  //   };
  //
  //   sendingData = JSON.stringify(sendingData);
  //   console.log('send to acceptor', sendingData)
  //   // this.socket.send(sendingData);
  // }
}
