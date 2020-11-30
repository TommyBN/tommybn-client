import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'calendar-header',
  templateUrl: './calendar-header.component.html',
  styles:[`
    .container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .middle {
      margin-left: 20px
    }

    .active {
      background-color: #bcbcbc
    }
  `]
})
export class CalendarHeaderComponent   {

  @Input() view: CalendarView | 'month' | 'week' | 'day';

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}
