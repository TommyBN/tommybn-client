import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name: string;
  @Input() hollyNumber: number;
  @Output() refreshPageEmitter:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('yourAscii') yourAsciiElement: ElementRef;
  
  yourAsciiText: string = 'Did you know that your Ascii Numerologic number is . . . . .     ';
  inter: any = interval(80);
  showHollyNumber: boolean = false;

  constructor() { }
  
  ngOnInit() {
    let len = this.yourAsciiText.length
    let obs = this.inter.pipe(take(len));
    let i = 0;
    setTimeout(()=> {
      obs.subscribe(
        ()=> {
          this.yourAsciiElement.nativeElement.innerHTML+=this.yourAsciiText[i];
          i++;
        },
        ()=>{},
        ()=>{
          this.showHollyNumber = true;
        }
      )
    }, 2500);
    obs.subscribe()
  }

  refresh() {
    this.refreshPageEmitter.emit()
  }

}
