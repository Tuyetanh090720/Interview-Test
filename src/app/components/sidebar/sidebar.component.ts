import { Component, Input, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  @Input() testList: any
  @Input() questionStatus: any

  constructor(public dialog: MatDialog ){}

  openResult(): void {
    console.log("oke")
    this.dialog.open(ResultComponent);
  }
}
