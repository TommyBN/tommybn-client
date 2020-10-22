import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User {
    _id: string;
    name: string;
    password: string;
}



@Injectable()
export class UserService{

    private usersUrl = 'http://localhost:8080/users';
    private eventsUrl = 'http://localhost:8080/events';
    public userId;
    
    constructor (private http:HttpClient) {}

    getUser(id): Observable<User>{
        this.userId = id;
        return <Observable<User>>this.http.get(`${this.usersUrl}?id=${id}`)
    }

    // setUserInStore(user){
    //         this.store.dispatch({
    //             type:'set-user',
    //             payload: user
    //         })
    // }
    
    // getUserEvents():Observable<CalendarEvent[]>{
    //     return <Observable<CalendarEvent[]>> this.http.get(`${this.eventsUrl}?id=${this.userId}`); 
    // }

    // setUserEventsInStore(){
    //     this.getUserEvents().subscribe(events=>{
    //         this.store.dispatch({
    //             type:'set-events',
    //             payload: events
    //         })
    //     })    
    // }
 

}