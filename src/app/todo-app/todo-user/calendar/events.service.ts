import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';
import { Todo, UserService } from '../user.service';

@Injectable() export class EventsService {

    private url = 'somewhere over the rainbow';
    public allEvents: CalendarEvent[];
    private newEvent: CalendarEvent;

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    createEvent(todo: Todo) {
        this.newEvent.title = todo.title;
        this.newEvent.start = todo.startDate;
        this.newEvent.end = todo.startDate;
        let num = todo.startDate.getHours() + todo.duration;
        this.newEvent.end.setHours(num);
        this.userService.addEVent(this.newEvent)
    }

    addEvent(event:CalendarEvent):boolean {
        let i = this.allEvents.length; 
        this.allEvents.push(event);
        return (i = this.allEvents.length) ? true : false
    }

}