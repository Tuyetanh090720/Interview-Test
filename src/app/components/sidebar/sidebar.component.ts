import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  @Input() testList: any
  @Output() question: EventEmitter<string> =   new EventEmitter();

  pause : boolean = false
  showResult : boolean = false
  page : number

  constructor(private el: ElementRef, private dialog: MatDialog){}

  openResult() {
    this.pause = true

    const dialogRef = this.dialog.open(ResultComponent);
  }

  toQuestion(id : any) {
    this.question.emit(id)
  }
}
