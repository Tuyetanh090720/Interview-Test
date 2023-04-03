import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/components/result/result.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html'
})
export class CountdownTimerComponent implements OnInit {

  @Input() currentTime : boolean

  minuteIndex: any
  secondIndex: any
  pause : boolean
  constructor(private data: DataService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.timer(30)
    this.data.currentTimer.subscribe(pause => this.pause = pause)
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

      if (this.pause) {
        clearInterval(timer);
      }

      if (seconds == 0) {
        const dialogRef = this.dialog.open(ResultComponent);
        dialogRef.afterClosed().subscribe(result => {});
        clearInterval(timer);
      }
    }, 1000);
  }
}
