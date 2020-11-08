import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CalendarEvent }
  from 'angular-calendar';
// import { colors } from './colors';

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

  @Input() events: CalendarEvent[];

  constructor(
  ) { }

  ngOnInit() {
    
  }


}