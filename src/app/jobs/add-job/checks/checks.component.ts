import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['../add-job.component.css']
})
export class ChecksComponent {

  @Output() emitDays:EventEmitter<string[]> = new EventEmitter<string[]>();

    days = [
      {name: 'ראשון', checked: false, color: 'primary'},
      {name: 'שני', checked: false, color: 'accent'},
      {name: 'שלישי..', checked: false, color: 'warn'},
      {name: 'רביעי....', checked: false, color: 'primary'},
      {name: 'חמישי......', checked: false, color: 'accent'},
      {name: 'שישי??....', checked: false, color: 'warn'},
      {name: 'שבת?!?!?', checked: false, color: 'warn'}
    ];
    

  fullTime: boolean = false;
  fullOrPart: string = 'משרה מלאה'  

  checkAllDays() {
    this.fullTime = this.days != null && this.days.every(t => t.checked);
  }
  
  partTime(): boolean {
    if (this.days == null) {
      return false;
    }
    return this.days.filter(t => t.checked).length > 0 && !this.fullTime;
  }
  
  allDaysSame(checked: boolean) {
    this.fullTime = checked;
    this.fullOrPart = checked ? 'משרה חלקית' : 'משרה מלאה'
    if (this.days == null) {
      return;
    }
    this.days.forEach(t => t.checked = checked);
  }
}
