import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from "../user.service";

export interface Todo {
    user_id: string,
    title: string,
    event_id: string,
}

@Injectable()
export class TodoService{

    private url = 'http://localhost:8080/todos';
    public newTodo:any;

    constructor ( 
        private http:HttpClient,
        private userService: UserService) {}

    setTodosInStore(todos:Todo[]){
    }

    getUserTodos(id): Observable<Todo[]>{
        return <Observable<Todo[]>>this.http.get(`${this.url}?id=${id}`);
    }


    addTodo(todo): Observable<Todo>{
        let body = { todo: todo, userId: this.userService.userId }
        return <Observable<Todo>>this.http.post(`${this.url}/new`, body)
    }

    updateTodo(id, newTitle): Observable<any>{
        return this.http.get(`${this.url}/${id}/${newTitle}`)
    }

    deleteTodo(todoId): Observable<any>{
        return this.http.delete(`${this.url}/${todoId}`)
    }

}