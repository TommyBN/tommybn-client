import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Company } from '../companies/all-companies/all-companies.component';

@Injectable()
export class JobsService {

    private url: string = `${environment.apiBaseUrl}/jobs`;
    public userId: string;


    constructor(
        private http: HttpClient,
    ) { }

    getCompanies(): Observable<Company[]> {
        return <Observable<Company[]>>this.http.get(`${this.url}/${this.userId}`);
    }


    saveCompany(company: Company): Observable<Company> {
        return <Observable<Company>>this.http.post(`${this.url}/add/${this.userId}`, company, {'responseType': 'json'});
    }



    deleteCompany(name): Observable<any> {
        return <Observable<Company>>this.http.post(`${this.url}/delete/${this.userId}`, {name}, {'responseType': 'json'})
    }



















}