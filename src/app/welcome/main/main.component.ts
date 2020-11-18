import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('imageText') imageText: ElementRef;

  name: string;
  about: boolean = false;
  apps: boolean = false;
  techs: boolean = false;
  // imageTextContent: string = `
  // <h1>heading</h1>
  // <p>bla bla bla bla </p>
  // `


  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // console.log(this.imageText.nativeElement.innerHTML = `
    // <h1>heading</h1>
    // <p>bla bla bla bla </p>
    // `)
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#52c7b8';
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#eeeeee';
  }

  toggleDiv(divName: string) {
    switch (divName) {
      case 'about':
        this.about = !this.about;
        this.apps = false;
        this.techs = false;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.about ? 1 : 0;
          this.image.nativeElement.style.opacity = this.about ? 0.3 : 1;
        }
        break;
      case 'apps':
        this.about = false;
        this.apps = !this.apps;
        this.techs = false;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.apps ? 1 : 0;
          this.image.nativeElement.style.opacity = this.apps ? 0.3 : 1;
        }
        break;
      case 'techs':
        this.about = false;
        this.apps = false;
        this.techs = !this.techs;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.techs ? 1 : 0;
          this.image.nativeElement.style.opacity = this.techs ? 0.3 : 1;
        }
        break;

    }
  }


  setHeight(divName: string) {
    switch (divName) {
      case 'about':
        if (screen.width > 760) return this.about ? '170px' : '0px';
        if (screen.width > 600) return '0px'
        return this.about ? '200px' : '0px'
      case 'apps':
        if (screen.width > 760) return this.apps ? '291px' : '0px'
        if (screen.width > 600) return '0px'
        return this.apps ? '400px' : '0px'
      case 'techs':
        if (screen.width > 760) return this.techs ? '500px' : '0px'
        if (screen.width > 600) return '0px'
        return this.techs ? '400px' : '0px'
    }
  }

}
