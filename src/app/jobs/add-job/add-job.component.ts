import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../Job';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobsService } from '../jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @Input() jobToEdit: Job;
  @Input() jobID: string;
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter<string>();

  private url: string = `${environment.apiBaseUrl}/jobs`;
  public title: string = 'הוספת משרה';
  private edit: boolean = false;
  public submitButtonText: string = 'שמור משרה';
  private id: string;
  isOutSourcing: boolean = false;
  isExperience: boolean = false;

  days = [
    {name: 'ראשון', checked: false},
    {name: 'שני', checked: false},
    {name: 'שלישי', checked: false},
    {name: 'רביעי', checked: false},
    {name: 'חמישי', checked: false},
    {name: 'שישי', checked: false},
  ];
  
  
  jobForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    jobDescription: new FormControl(''),
    companyDescription: new FormControl(''),
    skills: new FormControl(['הוסף / הסר כישורים']),
    experienceNeeded: new FormControl(''),
    questions: new FormControl(['הוסף / הסר שאלות']),
    jobBoard: new FormControl(''),
    outSourcing: new FormControl(''),
    contactMan: new FormControl(''),
    phoneNumber: new FormControl(''),
    remarks: new FormControl(['הוסף / הסר הערות']),
    stayHome: new FormControl(0),
    rolePercentage: new FormControl(0),
    days: new FormControl([
      {name: 'ראשון', checked: false},
      {name: 'רביעי', checked: false},
      {name: 'שני', checked: false},
      {name: 'חמישי', checked: false},
      {name: 'שלישי', checked: false},
      {name: 'שישי', checked: false},
    ]),
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
  
    setChips(chipsFormControlName: string, chips: string[]) {
      this.jobForm.get(chipsFormControlName).setValue(chips)
    }

    checkDay(day) {
      console.log(day);
      day.checked = !day.checked;
      console.log(this.jobForm.value.days)
    }

  onSubmit() {
    console.log(this.jobForm)
    let job = <Job>this.jobForm.value;
    console.log(job)

    //update
    if (this.edit) {
      this.jobsService.deleteJob(job.name).subscribe(response => {
        this.jobsService.addJob(job).subscribe(res => {
          if (res['result']['ok'] == 1) this.formSubmitted.emit('פרטי משרה עודכנו בהצלחה :)');
        })
      })

    }

    //add
    else this.jobsService.addJob(job).subscribe(jobCreated => {
      this.formSubmitted.emit('נוספה לרשימת המשרות שלך :)');
    })

  }


}
