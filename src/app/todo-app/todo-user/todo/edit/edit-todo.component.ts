import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { CalendarEvent } from 'angular-calendar';
import { UserService } from '../../user.service';
import * as moment from 'moment';
import { EventsService } from '../../calendar/events.service';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['../../user-forms.css']
})
export class EditTodoComponent implements OnInit {
    
    @Output() emitTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    public newTodo: Todo;
    public newTodoTitle: string;
    public newTodoStartsAt: Date;
    public newTodoEvent: CalendarEvent = {
        title: '',
        start: null,
        end: null,
        draggable: true
    };
    
    public event:any;

    constructor(
        private userService: UserService,
        private todoService: TodoService,
        private eventsService: EventsService) { }

    ngOnInit() { 
        this.newTodo = { title:'',event_id: '', user_id: ''} 
        this.event = { title: '', start: new Date()}
    }

    async onSubmit() {
        // //create event
        // this.event.title = this.newTodo.title;
        // // this.event.color = "yellow";
        // this.event.start = await moment(this.event.start).toDate();
        // this.event.draggable = true;
        // let body = { ...this.event, user_id: this.userService.userId };

        // //save todo and add event to events array, (get ID of todo?)  
        // // this.newTodo.event_id = eventID;    
        // this.emitTodo.emit(this.newTodo)
        // if (this.eventsService.addEvent(body))
    }

}

