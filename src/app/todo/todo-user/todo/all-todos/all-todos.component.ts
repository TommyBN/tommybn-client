import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../../todo-user/todo/todo.service';
import { UserService } from '../../user.service';
import { MatDialog } from '@angular/material/dialog';
import { deleteTodoDialog } from './delete-todo-dialog';

@Component({
    selector: 'app-todos',
    templateUrl: './all-todos.component.html',
    styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit{

    @Input() todos:Todo[] = [];
    @Output() DBChangeNotification:EventEmitter<any> = new EventEmitter<any>();
    viewAddForm: boolean = false;
    currentTodoIndex:number;
    showDeleteIcon: boolean = false;
    currentTodoToDelete: number;
    addTodoButtonText: string = 'הוסף מטלה';
    deleteButtonText: string = 'מחיקת מטלות';

    constructor ( 
        private todoService:TodoService,
        private userService:UserService,
        public dialog: MatDialog
    ){}

    ngOnInit(){}

    submitNew(todo: Todo) {
        this.todoService.addTodo(todo).subscribe( () => {
            this.DBChangeNotification.emit();
            this.viewAddForm = false;
            this.addTodoButtonText = 'הוסף מטלה';
        }) 
    }

    deleteTodo(title){
        this.todoService.deleteTodo(title).subscribe(response => {
            this.currentTodoToDelete = -1;
            this.showDeleteIcon = false;
            this.deleteButtonText = 'מחיקת מטלות';
            this.DBChangeNotification.emit()
        })
    }
    
    openDialog(i: number): void {
        this.currentTodoToDelete = i;
        const dialogRef = this.dialog.open(deleteTodoDialog, { 
            width: '250px', 
            data: {todoTitle: this.todos[i].title}
         });
    
        dialogRef.afterClosed().subscribe(deleteCurrentTodo => {
            let title = this.todos[this.currentTodoToDelete].title;
            if (deleteCurrentTodo) this.deleteTodo(title);
            this.currentTodoToDelete = -1;
            this.showDeleteIcon = false;
          });
    
    
    }
   
    addTodoButtonClicked() {
        this.viewAddForm = !this.viewAddForm;
        this.addTodoButtonText = this.viewAddForm ? 'ביטול' : 'הוסף מטלה'
    }

    deleteButtonClicked() {
        this.showDeleteIcon = !this.showDeleteIcon;
        this.deleteButtonText = this.showDeleteIcon ? 'ביטול' : 'מחיקת מטלות'
    }




  

}