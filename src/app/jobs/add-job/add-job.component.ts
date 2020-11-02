import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../companies/all-companies/all-companies.component';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @Input() jobToEdit: Company;
  @Input() jobID: string;
  @Output() formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  private url: string = 'http://127.0.0.1:3000/companies';
  private title: string = 'הוספת משרה';
  private edit: boolean = false;
  private submitButtonText: string = 'הוסף'


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

  constructor(private http: HttpClient) { }

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
      this.editCompany(company).subscribe(res => {
        if( res['result']['ok'] == 1) window.alert('Document updated successfully.')
        this.formSubmitted.emit(true);
      })

    } 

    //add
    else this.saveCompany(company).subscribe(companyCreated => {
      window.alert('Company added successfuly');
      this.formSubmitted.emit(true);
    })

  }

  saveCompany(company: Company): Observable<Company> {
    return <Observable<Company>>this.http.post(`${this.url}/new`, company);
  }

  editCompany(company: Company): Observable<Company> {
    return <Observable<Company>>this.http.post(`${this.url}/${this.jobID}`, company);
  }
}
