import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from "../user.service";
import { environment } from 'src/environments/environment';
import { Time } from '@angular/common';

export interface Todo {
    title: string;
    duration?: number;
    startDate?: Date;
    startHour?: Time;
}

@Injectable()
export class TodoService {

    private SERVER_URL = `${environment.apiBaseUrl}/todos`;

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    // get todos from DB
    public getTodosFromDB(): Observable<Todo[]> {
        return <Observable<Todo[]>>this.http.get(`${this.SERVER_URL}/${this.userService.userID}`)
    }

    //add to DB
    public addTodo(todo: Todo): Observable<any> {
        return this.http.post(`${this.SERVER_URL}/${this.userService.userID}`, todo, { 'responseType': 'json' })
    }

    //delete from DB
    deleteTodo(todoTitle): Observable<any> {
        return this.http.post(`${this.SERVER_URL}/delete/${this.userService.userID}`,{title: todoTitle}, {'responseType': 'json'} )
    }

}