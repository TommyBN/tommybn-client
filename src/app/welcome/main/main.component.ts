import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('imageText') imageText: ElementRef;

  name: string;


  constructor(private mainPageService: MainPageService) { }

  ngOnInit() { }

  checkTechs() {
    return this.mainPageService.techs
  }

  toggleDiv(divName: string) {
    switch (divName) {
      case 'about':
        this.mainPageService.about = !this.mainPageService.about;
        this.mainPageService.apps = false;
        this.mainPageService.techs = false;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.mainPageService.about ? 1 : 0;
          this.image.nativeElement.style.opacity = this.mainPageService.about ? 0.3 : 1;
        }
        break;
      case 'apps':
        this.mainPageService.about = false;
        this.mainPageService.apps = !this.mainPageService.apps;
        this.mainPageService.techs = false;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.mainPageService.apps ? 1 : 0;
          this.image.nativeElement.style.opacity = this.mainPageService.apps ? 0.3 : 1;
        }
        break;
      case 'techs':
        this.mainPageService.about = false;
        this.mainPageService.apps = false;
        this.mainPageService.techs = !this.mainPageService.techs;
        if (screen.width < 768 && screen.width > 600) {
          this.imageText.nativeElement.style.opacity = this.mainPageService.techs ? 1 : 0;
          this.image.nativeElement.style.opacity = this.mainPageService.techs ? 0.3 : 1;
        }
        break;

    }
  }


  setHeight(divName: string) {
    switch (divName) {
      case 'about':
        if (screen.width > 760) return this.mainPageService.about ? '210px' : '0px';
        if (screen.width > 600) return '0px'
        return this.mainPageService.about ? '300px' : '0px'
      case 'apps':
        if (screen.width > 760) return this.mainPageService.apps ? '291px' : '0px'
        if (screen.width > 600) return '0px'
        return this.mainPageService.apps ? '600px' : '0px'
      case 'techs':
        if (screen.width > 760) return this.mainPageService.techs ? '500px' : '0px'
        if (screen.width > 600) return '0px'
        return this.mainPageService.techs ? '400px' : '0px'
    }
  }

}
