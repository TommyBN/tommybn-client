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
    <button mat-stroke-button color="primary" (click)="onNoClick()">סבבה</button>
    </div>
    `,
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