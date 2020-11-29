import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { JobsService } from '../jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { jobsMessagesDialog } from './jobs-messages-dialog';
import { Job } from '../Job';

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
            console.log(this.allJobs)
        })
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