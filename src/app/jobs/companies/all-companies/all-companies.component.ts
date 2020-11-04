import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobsService } from '../../add-job/jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

    allCompanies: Company[];
    currentCompanyIndex: number;
    showForm: boolean = false;
    jobToEdit: Company;
    buttonText: string = 'הוסף משרה';
    jobToDelete: number = -1;

    constructor(
        private http: HttpClient,
        private jobsService: JobsService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.jobsService.userId = params.get('id');
        });
        this.jobsService.getCompanies().subscribe(companies => {
            this.allCompanies = companies;
        })
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

    delete(name: string) {
        this.jobsService.deleteCompany(name).subscribe(res => {
            if(res.nModified == 1) window.alert('Document deleted successfully');
            this.refresh();
        })
    }

    refresh() {
        this.ngOnInit();
        this.showForm = false;
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
    }
}