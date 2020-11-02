import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'radial-gradient(black, transparent)';
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'rgb(134, 99, 85)';
  }

 

}
