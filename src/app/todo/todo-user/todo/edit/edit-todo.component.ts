import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['../../user-forms.css']
})
export class EditTodoComponent implements OnInit {

    @Output() emitTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

    public createEvent: boolean = false;

    public todoForm: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        duration: new FormControl(''),
        startDate: new FormControl(''),
        startHour: new FormControl('')
    })

    constructor() { }


    ngOnInit() {    }

    toggleEventForm() {
        this.createEvent = !this.createEvent
    }

    onSubmit() {
        this.emitTodo.emit(this.todoForm.value as Todo);
    }

}

