import { Component, ElementRef, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
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
    private router: Router

  ) { }

  ngOnInit() {

    this.router.events.subscribe(evt=>{
      if(!(evt instanceof NavigationEnd)) return
      document.body.scrollTop = 0;
    })

    //set user
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userService.userID = id;
      this.userService.getName().subscribe(name => this.userName = name)
    })
    this.setTodosAndEvents()
  }

  //set todos and events
  setTodosAndEvents() {
    this.todoService.getTodosFromDB().subscribe(todos => {
      if(todos) {
        this.calendarEvents = this.userService.createCalEvents(todos)
        this.todos = this.todoService.createTodos(todos);
        this.userService.refreshCalendar.emit();
      }
    })
  }
  getEvents(): CalendarEvent[] {
    return this.calendarEvents;
  }

  resetEvents() {
    this.calendarEvents = [];
  }


}

