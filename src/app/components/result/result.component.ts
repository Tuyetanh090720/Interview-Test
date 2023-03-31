import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {

  constructor(public dialogRef: MatDialogRef<ThanksComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
