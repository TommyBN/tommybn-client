import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CalendarEvent } from 'angular-calendar';

export interface User {
    todos: Todo[];
    events: CalendarEvent[];
}

export interface Todo {
    title: string;
    duration?: number;
    startDate?: Date;
}

@Injectable()
export class UserService{

    SERVER_URL: string = environment.apiBaseUrl;
    public userID;
    public user: User;
    
    constructor (private http:HttpClient) {}

    public getTodos(): Observable<Todo[]> {
        return <Observable<Todo[]>>this.http.get(`${this.SERVER_URL}/todos/${this.userID}`)
    }

    public addTodo(todo: Todo): Observable<any> {
        return this.http.post(`${this.SERVER_URL}/todos/${this.userID}`, todo, {'responseType': 'json'})
    }

    public getEvents() {

    }

    public addEVent(event: CalendarEvent) {
        return this.http.post(`${this.SERVER_URL}/events`, event, {'responseType': 'json'})
    }












    // getUser(id): Observable<User>{
    //     this.userId = id;
    //     return <Observable<User>>this.http.get(`${this.usersUrl}?id=${id}`)
    // }

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