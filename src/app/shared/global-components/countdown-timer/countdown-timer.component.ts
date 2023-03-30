import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html'
})
export class CountdownTimerComponent {

  minuteIndex: any;
  secondIndex: any;

  constructor() {
    this.timer(2);
  }

  timer(minute: any) {
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefixMinute = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;


      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.minuteIndex = `${prefixMinute}${Math.floor(seconds / 60)}`
      this.secondIndex = `${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
}
}
