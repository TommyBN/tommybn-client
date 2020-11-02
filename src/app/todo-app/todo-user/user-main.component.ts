import { Component, ElementRef, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { Todo, TodoService } from './todo/todo.service';
import * as moment from 'moment';

@Component({
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})

export class UserMainComponent implements OnInit {

  userName: string;
  todos: Todo[];
  calendarEvents: CalendarEvent[] = [];

  constructor(
    private elementRef: ElementRef,
    private userService: UserService,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {

    //set user
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userService.userID = id;
      this.userService.getName().subscribe(name => this.userName = name)
    })
    this.setTodos()
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(187, 238, 234)';
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(134, 99, 85)';
  }

  //set todos and events
  setTodos() {
    this.todoService.getTodosFromDB().subscribe(todos => {
      if(todos) this.todos = todos;
      this.createCalEvents();
      this.userService.refreshCalendar.emit();
    })
  }

  createCalEvents() {
    this.resetEvents();
    if (Array.isArray(this.todos)) {
      for (let todo of this.todos) {
        if (todo.startDate) {
          let startHour = todo.startHour ? todo.startHour : '08:00'
          let event: CalendarEvent = {
            title: todo.title,
            start: moment(todo.startDate + ' ' + startHour).toDate(),
            draggable: true
          }
          // event.end = todo.startDate;
          this.calendarEvents.push(event);
        }
      }

    }
  }

  getEvents(): CalendarEvent[] {
    return this.calendarEvents;
  }

  resetEvents() {
    this.calendarEvents = [];
  }


}

