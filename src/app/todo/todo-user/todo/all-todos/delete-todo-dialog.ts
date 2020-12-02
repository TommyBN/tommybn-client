import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    todoTitle: string
}

@Component({
    template: `
    <div mat-dialog-content>
    <p>האם למחוק את המטלה '{{data.todoTitle}}'?</p>
    </div>
    <div class="row" mat-dialog-actions>
    <button mat-stroked-button color="primary" (click)="onNoClick()">ביטול</button>  
    <button class="warn" mat-button color="warn" mat-dialog-close (click)="delete()" cdkFocusInitial>מחק</button>
    </div>
    `,
    styles:[`
      .row {
        display: flex;
        felx-direction: row;
        justify-content: space-between;
      }

      button {
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .warn {
        background-color: red !important;
      }
    `]
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