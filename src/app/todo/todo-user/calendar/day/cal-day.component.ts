import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-cal-day',
  templateUrl: './cal-day.component.html'
})

export class CalDayComponent implements OnInit {

  @Input() events: CalendarEvent[];

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNotified().subscribe(()=> this.refresh.next())
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }



}