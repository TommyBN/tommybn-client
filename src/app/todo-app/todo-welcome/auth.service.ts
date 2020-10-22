import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService implements CanLoad {

    URL:string = "http://localhost:8080/auth";

  constructor( private http: HttpClient) {}

  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    return true
  }
}