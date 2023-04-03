import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../shared/global-components/confirmation/confirmation.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  @Input() testList: any
  @Output() question: EventEmitter<string> =   new EventEmitter();

  showResult : boolean = false
  page : number
  sidebarQuestion : string = '1'


  constructor(private el: ElementRef, private dialog: MatDialog){}

  confirmSubmission() {
    const dialogRef = this.dialog.open(ConfirmationComponent);
  }

  toQuestion(id : any) {
    this.question.emit(id)

    this.sidebarQuestion = id
  }
}
