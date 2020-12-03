import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Job } from './Job';

@Injectable()
export class JobsService {

    private url: string = `${environment.apiBaseUrl}/jobs`;
    public userId: string;


    constructor(
        private http: HttpClient,
    ) { }

    getJobs(): Observable<Job[]> {
        return <Observable<Job[]>>this.http.get(`${this.url}/${this.userId}`);
    }

    addJob(job: Job): Observable<Job> {
        return <Observable<Job>>this.http.post(`${this.url}/add/${this.userId}`, job, {'responseType': 'json'});
    }

    deleteJob(name): Observable<any> {
        return <Observable<Job>>this.http.post(`${this.url}/delete/${this.userId}`, {name}, {'responseType': 'json'})
    }



















}