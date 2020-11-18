import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('image') image: ElementRef;  
  @ViewChild('imageText') imageText: ElementRef;  
  @ViewChild('about') aboutElement: ElementRef;  
  @ViewChild('apps') appsElement: ElementRef;  
  @ViewChild('whatDo') whatDoElement: ElementRef;  
  name: string;
  about: boolean = false;
  apps: boolean = false;
  techs: boolean = false;
  // imageTextContent: string = `
  // <h1>heading</h1>
  // <p>bla bla bla bla </p>
  // `
  

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {   }
  
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
    if(screen.width > 768 || screen.width < 600) {
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
    else {
      this.image.nativeElement.style.opacity = 0.3;
      switch (divName) {
        case 'about':
          this.imageText.nativeElement.innerHTML = this.aboutElement.nativeElement.innerHTML;
          this.imageText.nativeElement.style.opacity = 1;
          break;
        case 'apps':
          this.imageText.nativeElement.innerHTML = this.appsElement.nativeElement.innerHTML;
          this.imageText.nativeElement.style.opacity = 1;
          break;
        case 'techs':
          this.imageText.nativeElement.innerHTML = this.whatDoElement.nativeElement.innerHTML;
          this.imageText.nativeElement.style.opacity = 1;
          break;
      }
    }
  }

  setHeight(divName: string) {
    switch (divName) {
      case 'about':
        if(screen.width > 760) return this.about ? '170px' : '0px';
        if(screen.width > 600) return this.about ? '100px' : '0px'
        return this.about ? '332px' : '0px'
      case 'apps':
        if(screen.width > 760) return this.apps ? '291px' : '0px'
        if(screen.width > 600) return this.apps ? '200px' : '0px'
        return this.apps ? '400px' : '0px'
      case 'techs':
        if(screen.width > 760) return this.techs ? '500px' : '0px'
        if(screen.width > 600) return this.techs ? '300px' : '0px'
        return this.techs ? '400px' : '0px'
    }
  }

}
