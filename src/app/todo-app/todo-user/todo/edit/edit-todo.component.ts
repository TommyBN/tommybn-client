import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { CalendarEvent } from 'angular-calendar';
import { UserService } from '../../user.service';
import * as moment from 'moment';
import { EventsService } from '../../calendar/events.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['../../user-forms.css']
})
export class EditTodoComponent implements OnInit {

    @Output() emitTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() emitEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();

    public createEvent: boolean = false;

    public todoForm: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        duration: new FormControl(''),
        date: new FormControl('')
    })

    constructor(
        private userService: UserService,
        private todoService: TodoService,
        private eventsService: EventsService) { }


    ngOnInit() {    }

    onSubmit() {
        this.emitTodo.emit(this.todoForm.value)
    }

}

