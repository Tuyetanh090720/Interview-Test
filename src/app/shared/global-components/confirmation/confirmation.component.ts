import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ResultComponent } from '../../../components/result/result.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {

  pause : boolean

  constructor(private data: DataService, private dialog: MatDialog, public dialogRef: MatDialogRef<ConfirmationComponent>){}

  submit(){
    this.pause = true

    this.data.timerSource.next(this.pause)

    this.dialog.open(ResultComponent);

    this.dialogRef.close()
  }

  cancel(){
    this.dialogRef.close()
  }
}
