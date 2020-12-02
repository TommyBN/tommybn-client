import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarMonthViewBeforeRenderEvent, CalendarView }
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

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      // const dayOfMonth = day.date.getDate();
      // if (dayOfMonth > 5 && dayOfMonth < 10 && day.inMonth) {
        day.cssClass = 'bg-pink';
      // }
    });
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