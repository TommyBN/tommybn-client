import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.service';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-todos',
    templateUrl: './all-todos.component.html',
    styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit{

    viewAddForm: boolean = false;
    userTodos:Todo[] = [];
    currentTodoIndex:number;
    showDeleteIcon: boolean = false;
    currentTodoToDelete: number;

    constructor ( 
        private todoService:TodoService,
        private userService:UserService,
    ){}


    ngOnInit(){
        this.setTodos();
    }

    setTodos(){
        this.todoService.getUserTodos(this.userService.userId)
        .subscribe(todos => {
            this.userTodos = todos;
            this.todoService.setTodosInStore(todos);
        })
    }

    showTodo(eventID) {
        console.log(eventID)
    }

    toggleAddForm(){
        this.viewAddForm = !this.viewAddForm
    }

    openEditForm(i){
        this.currentTodoIndex = this.currentTodoIndex == i ? -1 : i
    }

    submitNewTodo(todo: Todo){
        this.todoService.addTodo(todo).subscribe(todo => {
            window.alert('todo saved: '+todo);
            this.setTodos();
            this.viewAddForm = false;
        })
        
    }

    editTodo(todoId, newTitle){
        this.todoService.updateTodo(todoId, newTitle).subscribe(todo => {
            window.alert('updated todo + event: '+todo)
            this.currentTodoIndex = -1;
            this.setTodos();
        })
    }

    deleteTodo(todoId){
        this.todoService.deleteTodo(todoId).subscribe(id => {
            window.alert('todo number '+id+' deleted');
            this.setTodos();
            this.currentTodoToDelete = -1;
        })
    }




  

}