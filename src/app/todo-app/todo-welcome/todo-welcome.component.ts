import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-welcome',
    templateUrl:'./todo-welcome.component.html',
    styleUrls:['./todo-welcome.component.css']
})

export class TodoWelcomeComponent {

    @ViewChild('test') testOutput: ElementRef;

    constructor(
        private http:HttpClient
    ){}

    testDB(){
        this.getResponse().subscribe( response=>{ 
            this.testOutput.nativeElement.innerHTML = response;
        })
    }

    getResponse():Observable<string>{
        return <Observable<string>>this.http.get(`${environment.apiBaseUrl}/test`, {responseType:  'text'})
    }


}