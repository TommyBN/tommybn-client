import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-cal-month',
  templateUrl: './cal-month.component.html',
})

export class CalMonthComponent implements OnInit {

  @Input() events: CalendarEvent[];
  @Output() changeDay: EventEmitter<Date> = new EventEmitter<Date>()
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date(); 
  refresh: Subject<any> = new Subject();

  constructor(
    private userService: UserService,
    ) { }

   ngOnInit() {
    this.userService.getNotified().subscribe(()=> this.refresh.next())
  }

  dayClicked(e) {
    this.changeDay.emit(e.day.date)
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