import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
// import { colors } from './colors';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cal-main',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

     //splitter stuff
     private _sidebarSize: string = localStorage.getItem('sidebarSize') || '20%';
     public get sidebarSize(): string {
         return this._sidebarSize;
     }
     public set sidebarSize(newSize: string) {
         this._sidebarSize = newSize;
         localStorage.setItem('sidebarSize', newSize);
     }

  //   view: CalendarView = CalendarView.Month;
  //   viewDate: Date = new Date();
  currentDay: Date;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  viewDay = false;
  viewMonth = true;
  viewEvent = true;

  constructor(private userService: UserService) { }

  async ngOnInit() {
   
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