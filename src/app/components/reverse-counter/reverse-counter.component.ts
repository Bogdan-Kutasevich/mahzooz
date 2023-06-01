import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../services/router.service";

@Component({
  selector: 'app-reverse-counter',
  templateUrl: './reverse-counter.component.html',
  styleUrls: ['./reverse-counter.component.scss']
})
export class ReverseCounterComponent implements OnInit{
  public seconds = 45;
  constructor(public router: RouterService) {
  }

  ngOnInit() {
    this.startTimer()
  }

  startTimer() {
    const interval = setInterval(() => {
      if(this.seconds === 0) {
        window.clearInterval(interval)

        return;
      }
      this.seconds = this.seconds - 1
    }, 1000)
  }

  tryAgain() {
    this.seconds = 45;
    this.startTimer();
  }
}
