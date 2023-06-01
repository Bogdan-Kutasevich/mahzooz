import {Component, OnInit} from '@angular/core';
import {CustomerDataService} from "../../services/data.service";
import {HttpService} from "../../services/http-service.service";
import {RouterService} from "../../services/router.service";
interface MyGame {
  id?: string,
  drawId?: string,
  tips?: string
}
@Component({
  selector: 'app-my-game-modal',
  templateUrl: './my-game-modal.component.html',
  styleUrls: ['./my-game-modal.component.scss']
})
export class MyGameModalComponent implements OnInit{
  public currentGames: MyGame[] = [];

  constructor(
    public customerData: CustomerDataService,
    private http: HttpService,
    public router: RouterService
  ) {}

  ngOnInit() {
    console.log(this.customerData.submitEntriesData)
    this.currentGames = this.customerData.submitEntriesData.tickets.map((ticket: any) => {
      return {
        id: ticket.ticked_id,
        drawId: ticket.first_draw_id,
        tips: ticket[Object.keys(ticket)[0]]
      }
    })
  }

  closeModal() {
    this.customerData.changeData({isMyGameModalHidden: true}, 'uiData')
  }
}
