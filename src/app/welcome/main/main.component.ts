import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name: string;
  about: boolean = false;
  apps: boolean = false;
  techs: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'radial-gradient(#80e27e, #bef67a)';
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#eeeeee';
  }

  toggleDiv(divName: string) {
    switch (divName) {
      case 'about' : 
        this.about = !this.about;
        this.apps = false;
        this.techs = false;
        break;
      case 'apps' : 
        this.about = false;
        this.apps = !this.apps;
        this.techs = false;
        break;
      case 'techs' : 
        this.about = false;
        this.apps = false;
        this.techs = !this.techs;
        break;

    }
  }

}
