import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
    _id?: string;
    name: string;
    location?: string;
    contactMan?: string;
    phoneNumber?: string;
    jobDescription?: string;
    companyDescription?: string;
    handsOn?: string;
    experienceNeeded?: string;
    remarks?: string;
    questions?: string;
    outSourcing?: string;
    jobBoard?: string;
    daysAndHours?: string;
    salary?: string;
}

@Component({
    selector: 'app-companies',
    templateUrl: './all-companies.component.html',
    styleUrls: ['./all-companies.component.css']
})

export class AllCompaniesComponent implements OnInit {

    private url: string = 'http://127.0.0.1:3000/companies';
    allCompanies: Company[];
    currentCompanyIndex: number;
    showForm: boolean = false;
    jobToEdit: Company;
    buttonText: string = 'הוסף משרה'

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getCompanies().subscribe(companies => {
            this.allCompanies = companies;
        })
    }

    getCompanies(): Observable<Company[]> {
        return <Observable<Company[]>>this.http.get(this.url);
    }

    open(i) {
        this.currentCompanyIndex = this.currentCompanyIndex == i ? -1 : i
    }

    toggleAddForm() {
        this.showForm = !this.showForm
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
        this.jobToEdit = this.jobToEdit ? null : this.jobToEdit;
    }

    openForEdit(i: number) {
        this.jobToEdit = this.allCompanies[i];
        this.showForm = true;
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
    }

    delete(id: string) {
        this.deleteCompany(id).subscribe(res => {
            window.alert('Company deleted successfully.');
            this.refresh();
        })
    }

    deleteCompany(id): Observable<Company> {
        return <Observable<Company>>this.http.delete(`${this.url}/${id}`)
    }

    refresh() {
        this.ngOnInit();
        this.showForm = false;
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
    }
}