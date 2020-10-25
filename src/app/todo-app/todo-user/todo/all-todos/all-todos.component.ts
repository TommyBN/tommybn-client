import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../user.service';
import { UserService } from '../../user.service';
import { EventsService } from '../../calendar/events.service';

@Component({
    selector: 'app-todos',
    templateUrl: './all-todos.component.html',
    styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit{

    viewAddForm: boolean = false;
    todos:Todo[] = [];
    currentTodoIndex:number;
    showDeleteIcon: boolean = false;
    currentTodoToDelete: number;

    constructor ( 
        private eventsService: EventsService,
        private todoService:TodoService,
        private userService:UserService,
    ){}


    ngOnInit(){
        this.userService.getTodos().subscribe(todos =>{
            this.todos = todos
        })
    }

    // setTodos(){
    //     this.todoService.getUserTodos(this.userService.userId)
    //     .subscribe(todos => {
    //         this.userTodos = todos;
    //         this.todoService.setTodosInStore(todos);
    //     })
    // }

    showTodo(eventID) {
        console.log(eventID)
    }

    // toggleAddForm(){
    //     this.viewAddForm = !this.viewAddForm
    // }

    openEditForm(i){
        this.currentTodoIndex = this.currentTodoIndex == i ? -1 : i
    }

    submitNewTodo(todo: Todo){
        if (todo.duration && todo.startDate) {
            this.eventsService.createEvent(todo);
        }
        this.userService.addTodo(todo).subscribe(todo => {
            console.log('todo saved: ',todo);
            this.viewAddForm = false;
        })
        
    }

    editTodo(todoId, newTitle){
        this.todoService.updateTodo(todoId, newTitle).subscribe(todo => {
            window.alert('updated todo + event: '+todo)
            this.currentTodoIndex = -1;
        })
    }

    deleteTodo(todoId){
        this.todoService.deleteTodo(todoId).subscribe(id => {
            window.alert('todo number '+id+' deleted');
            this.currentTodoToDelete = -1;
        })
    }




  

}