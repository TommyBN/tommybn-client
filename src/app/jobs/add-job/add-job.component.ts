import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../companies/all-companies/all-companies.component';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobsService } from './jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @Input() jobToEdit: Company;
  @Input() jobID: string;
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter<string>();

  private url: string = `${environment.apiBaseUrl}/jobs`;
  public title: string = 'הוספת משרה';
  private edit: boolean = false;
  public submitButtonText: string = 'הוסף';
  private id: string;


  jobForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    jobDescription: new FormControl(''),
    companyDescription: new FormControl(''),
    handsOn: new FormControl(''),
    experienceNeeded: new FormControl(''),
    questions: new FormControl(''),
    jobBoard: new FormControl(''),
    outSourcing: new FormControl(''),
    contactMan: new FormControl(''),
    phoneNumber: new FormControl(''),
    remarks: new FormControl(''),
    daysAndHours: new FormControl(''),
    salary: new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private jobsService: JobsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
 

    if (this.jobToEdit) {
      this.jobForm.patchValue({ ...this.jobToEdit });
      this.edit = true;
      this.title = `עריכה של "${this.jobToEdit.name}"`;
      this.submitButtonText = 'שמור שינויים';
    }
  }

  onSubmit() {
    let company = <Company>this.jobForm.value;

    //update
    if (this.edit) {
      this.jobsService.deleteCompany(company.name).subscribe(response => {
        this.jobsService.saveCompany(company).subscribe(res => {
          if( res['result']['ok'] == 1) this.formSubmitted.emit('פרטי משרה עודכנו בהצלחה :)');
        })
      })

    } 

    //add
    else this.jobsService.saveCompany(company).subscribe(companyCreated => {
      this.formSubmitted.emit('נוספה לרשימת המשרות שלך :)');
    })

  }

}
