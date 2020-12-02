import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

    @Output() emitTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

    public createEvent: boolean = false;
    addEventText = 'הוסף אירוע ביומן';

    public todoForm: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        duration: new FormControl(''),
        startDate: new FormControl(''),
        startHour: new FormControl('')
    })

    constructor() { }


    ngOnInit() {    }

    toggleEventForm() {
        this.createEvent = !this.createEvent;
        this.addEventText = this.createEvent ? 'הסר' : 'הוסף אירוע ביומן'
    }

    onSubmit() {
        this.emitTodo.emit(this.todoForm.value as Todo);
    }

}

