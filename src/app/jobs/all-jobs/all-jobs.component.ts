import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { JobsService } from '../jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { jobsMessagesDialog } from './jobs-messages-dialog';

export interface Job {
    _id?: string;
    name: string;
    location?: string;
    contactMan?: string;
    phoneNumber?: string;
    jobDescription?: string;
    companyDescription?: string;
    skills?: string[];
    experienceNeeded?: string;
    remarks?: string;
    questions?: string;
    outSourcing?: string;
    jobBoard?: string;
    daysAndHours?: string;
    salary?: string;
}

@Component({
    selector: 'app-jobs',
    templateUrl: './all-jobs.component.html',
    styleUrls: ['./all-jobs.component.css']
})

export class AllJobsComponent implements OnInit {

    allJobs: Job[];
    currentJobIndex: number;
    showForm: boolean = false;
    jobToEdit: Job;
    buttonText: string = 'הוסף משרה';
    jobToDelete: number = -1;
    jobValues = [
        { title: 'name', hebTitle: '', cols: 0 },
        { title: 'location', hebTitle: 'מיקום', cols: 1, rows: 1 },
        { title: 'contactMan', hebTitle: 'איש קשר', cols: 2, rows: 1 },
        { title: 'phoneNumber', hebTitle: 'טלפון', cols: 1, rows: 1 },
        { title: 'jobDescription', hebTitle: 'תיאור המשרה', cols: 1, rows: 3 },
        { title: 'companyDescription', hebTitle: 'תיאור החברה', cols: 1, rows: 3 },
        { title: 'handsOn', hebTitle: 'כישורים', cols: 1, rows: 2 },
        { title: 'experienceNeeded', hebTitle: 'כישורים', cols: 1, rows: 1 },
        { title: 'remarks', hebTitle: 'הערות', cols: 1, rows: 2 },
        { title: 'questions', hebTitle: 'שאלות', cols: 1, rows: 3 },
        { title: 'outSourcing', hebTitle: 'מיקור חוץ?', cols: 1, rows: 1 },
        { title: 'jobBoard', hebTitle: 'הגעתי דרך...', cols: 1, rows: 1 },
        { title: 'daysAndHours', hebTitle: 'גודל משרה', cols: 1, rows: 2 },
        { title: 'salary', hebTitle: 'שכר', cols: 1, rows: 1 },
    ]

    constructor(
        private http: HttpClient,
        private jobsService: JobsService,
        private activatedRoute: ActivatedRoute,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.jobsService.userId = params.get('id');
        });
        this.jobsService.getJobs().subscribe(companies => {
            this.allJobs = companies;
        })
    }

    getCols(key, value) {
        if (!value) return 0
        for(let value of this.jobValues) {
            if (key == value.title) return value.cols
        }
    }

    getRows(key, value) {
        if (!value) return 0
        for (let value of this.jobValues) {
            if (key == value.title) return value.rows
        }
    }

    getHebTitle(key) {
        for (let value of this.jobValues) {
            if(key == value.title) return value.hebTitle
        }
    }

    open(i) {
        this.currentJobIndex = this.currentJobIndex == i ? -1 : i
    }

    toggleAddForm() {
        this.showForm = !this.showForm
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
        this.jobToEdit = this.jobToEdit ? null : this.jobToEdit;
    }

    openForEdit(i: number) {
        this.jobToEdit = this.allJobs[i];
        this.showForm = true;
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
    }

    delete(name: string) {
        this.jobsService.deleteJob(name).subscribe(res => {
            if (res.nModified == 1) {
                this.popUpAndRefresh('בטוח תמצא/י משרה שהולמת אותך יותר!');
                this.jobToDelete = -1;
            }
        })
    }

    popUpAndRefresh(message: string) {
        this.ngOnInit();
        this.showForm = false;
        this.buttonText = this.showForm ? ' חזרה' : 'הוסף משרה';
        this.openDialog(message);
    }

    openDialog(message: string): void {
        const dialogRef = this.dialog.open(jobsMessagesDialog, {
            width: '250px',
            data: { text: message }
        });

        dialogRef.afterClosed().subscribe(result => {

        });


    }
}