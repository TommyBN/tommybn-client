import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Todo } from './todo/todo.service';
import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class UserService{

    public refreshCalendar:EventEmitter<any> = new EventEmitter<any>();
    public userID: string;
    
    constructor (
        private http:HttpClient,
        ) {}

    getName(): Observable<string> {
        return <Observable<string>>this.http.get(`${environment.apiBaseUrl}/auth/${this.userID}`)
    }

    getNotified() {
        return this.refreshCalendar;
    }

    createCalEvents(todos: Todo[]):CalendarEvent[] {
        // this.resetEvents();
        let events: CalendarEvent[] = [];
        if (Array.isArray(todos)) {
          for (let todo of todos) {
            if (todo.startDate) {
              let event: CalendarEvent = {
                title: todo.title,
                start: new Date(todo.startDate),
                // start: moment(todo.startDate + ' ' + startHour).toDate(),
                draggable: true
              }
              // event.end = todo.startDate;
              events.push(event);
            }
          }
    
        }
        return events;
      }

   

















}