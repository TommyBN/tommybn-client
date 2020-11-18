import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

    appName: string;
    funkyText: string;
    title: string;

    constructor(
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {

        // setup app stuff
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
          this.appName = params.get('appName');
          this.title = this.appName == 'todo' ? 'נעשה ונשמע' : 'בוא נמצא עבודה';
          this.funkyText = this.appName == 'todo' ? 'הכל מסתכם במשימה אחת פשוטה' : 'ריכוז פרטים לגבי משרות ששלחתי אליהם קורות חיים. הכל במקום אחד.'
        })
      }


    ngAfterViewInit() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(187, 238, 234)';
    }

    ngOnDestroy() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(134, 99, 85)';
    }

 


}