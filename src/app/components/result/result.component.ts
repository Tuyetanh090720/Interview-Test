import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {

  constructor(public dialogResult: MatDialogRef<ResultComponent>) { }

  onNoClick(): void {
    this.dialogResult.close();
  }
}
