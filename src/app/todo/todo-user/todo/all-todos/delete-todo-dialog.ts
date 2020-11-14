import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    todoTitle: string
}

@Component({
    template: `
    <div mat-dialog-content>
    <p>האם למחוק את המטלה {{data.todoTitle}}?</p>
    </div>
    <div mat-dialog-actions>
    <button mat-stroke-button color="primary" (click)="onNoClick()">ביטול</button>
    <button mat-button color="warn" mat-dialog-close (click)="delete()" cdkFocusInitial>מחק</button>
    </div>
    `,
  })
  export class deleteTodoDialog {

    constructor(
      public dialogRef: MatDialogRef<deleteTodoDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
      ) {}
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    delete() {
        this.dialogRef.close(true);
    }
  
  }