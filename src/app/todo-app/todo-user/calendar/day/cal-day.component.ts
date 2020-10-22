import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-cal-day',
  templateUrl: './cal-day.component.html'
})

export class CalDayComponent implements OnInit {

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  // obs: Observable<CalendarEvent> = this.store.select('currentDay').pipe(
  //   switchMap(
  //     day => this.store.select('events').pipe(
  //       filter(event => event.start == day), map(event => event)
  //     )
  //   )
  // )


  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.store.select('currentDay').pipe(
    //   switchMap(
    //     day => this.store.select('events').pipe(
    //       filter(event => event.start == day),
    //       map(event => this.events.push(event))
    //     )
    //   )
    // )
    // this.obs.subscribe(event => this.events.push(event))
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