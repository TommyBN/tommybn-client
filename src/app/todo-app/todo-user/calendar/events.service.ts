import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';

@Injectable() export class EventsService {

    private url = 'somewhere over the rainbow';
    public allEvents: CalendarEvent[];

    constructor(
        private http: HttpClient,
    ) { }

    addEvent(event:CalendarEvent):boolean {
        let i = this.allEvents.length; 
        this.allEvents.push(event);
        return (i = this.allEvents.length) ? true : false
    }

}