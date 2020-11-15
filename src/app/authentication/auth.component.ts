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

        //set user
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
          this.appName = params.get('appName');
        })
      }


    ngAfterViewInit() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(187, 238, 234)';
    }

    ngOnDestroy() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(134, 99, 85)';
    }

 


}