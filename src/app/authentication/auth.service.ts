import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormResponse } from './sign-up/sign-up.component';

interface AuthResponse {
    valid: boolean,
    msg: string,
    id: string,

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_URL: string = `${environment.apiBaseUrl}/auth`;
  userID: string;

  constructor(
    private http: HttpClient,

  ) { }

  logIn(userDetails) {
    return this.http.post<FormResponse>(`${this.SERVER_URL}/login`, userDetails)
  }

  setTokenAndID (id: string, token: string, ) {
    this.userID = id;
    localStorage.setItem('userID', id)
    localStorage.setItem('userToken', token);
  }

  checkUserToken(): Observable<AuthResponse> {
    if(localStorage.getItem('userToken')) {
      let token = localStorage.getItem('userToken');
      return <Observable<AuthResponse>>this.http.post(`${this.SERVER_URL}/check`, {}, {headers: new HttpHeaders({'Authorization': `Bearer ${token}`})})
    }
  }

}
