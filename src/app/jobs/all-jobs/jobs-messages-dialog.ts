import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    text: string,
}

@Component({
    template: `
      <div mat-dialog-content>
        <p>{{data.text}}</p>
      </div>
      <div mat-dialog-actions>
        <button mat-button color="primary" (click)="onNoClick()">👍</button>
      </div>
      `,
      styleUrls:['./all-jobs.component.css']
    // styles: ['* { direction: rtl } .container { background-color:  } button { border-radius: 10px;  }']
  })
  export class jobsMessagesDialog {

    constructor(
      public dialogRef: MatDialogRef<jobsMessagesDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
      ) {}
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }
  
  }