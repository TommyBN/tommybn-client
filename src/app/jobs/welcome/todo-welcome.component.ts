import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './todo-welcome.component.html',
    styleUrls: ['./todo-welcome.component.css']
})

export class TodoWelcomeComponent {

    constructor(
        private elementRef: ElementRef
    ) { }


    ngAfterViewInit() {
        // this.elementRef.nativeElement.ownerDocument.body.style.color = '#FFFFFF';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FFFFFF';
    }

    ngOnDestroy() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(134, 99, 85)';
    }

 


}