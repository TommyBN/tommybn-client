import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

    public refreshCalendar:EventEmitter<any> = new EventEmitter<any>();
    public userID: string;
    
    constructor (
        private http:HttpClient,
        ) {}

    getName(): Observable<string> {
        return <Observable<string>>this.http.get(`${environment.apiBaseUrl}/auth/${this.userID}`)
    }

    getNotified() {
        return this.refreshCalendar;
    }

   

















}