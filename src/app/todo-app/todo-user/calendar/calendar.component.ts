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

  //   view: CalendarView = CalendarView.Month;
  //   viewDate: Date = new Date();
  @Input() events: CalendarEvent[];

  constructor(
  ) { }

  ngOnInit() {
    // console.log(document.getElementsByTagName('kendo-splitter-pane')[1].attributes[1].value)
    
  }
  
  ngAfterViewInit() {
    // console.log(document.getElementsByTagName('kendo-splitter-pane')[1].attributes[1].value)
    // if (window.screen.width < 768) {
    //   document.getElementsByTagName('kendo-splitter-pane')[1].attributes[1].value = '100%'
      // document.getElementsByTagName('kendo-splitter-pane')[1].attributes[1].nodeValue = "horizontal"
    // }
    // else document.getElementsByTagName('kendo-splitter')[0].attributes[1].nodeValue = "vertical"
  }






}