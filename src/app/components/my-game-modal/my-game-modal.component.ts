import {Component, OnInit} from '@angular/core';
import {CustomerDataService} from "../../services/data.service";
import {HttpService} from "../../services/http-service.service";
import {RouterService} from "../../services/router.service";
interface MyGame {
  id?: string,
  drawId?: string,
  tips?: string,
  draw_date?: string
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
      const currentDrawInfoFromGetSystem = this.customerData.systemData.next_draws['102'].find((draw: any) => {
        return draw.draw_id === ticket.first_draw_id
      }) || null;
      return {
        id: ticket.ticked_id,
        drawId: ticket.first_draw_id,
        tips: ticket.tips[Object.keys(ticket.tips)[0]].split(','),
        draw_date: currentDrawInfoFromGetSystem?.draw_date
      }
    })
    console.log('currentGames', this.currentGames)
  }


  closeModal() {
    this.customerData.changeData({isMyGameModalHidden: true}, 'uiData')
  }
}
