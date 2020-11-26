import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../all-jobs/all-jobs.component';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobsService } from '../jobs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ENTER, SINGLE_QUOTE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Skill {
  name: string;
}

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
  public submitButtonText: string = 'הוסף';
  private id: string;

  //Chipstuff
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, SINGLE_QUOTE];
  // skills: Skill[] = [
  //   {name: 'הוסף / הסר כישורים'}
  // ];

  jobForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    jobDescription: new FormControl(''),
    companyDescription: new FormControl(''),
    skills: new FormControl([]),
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

  get skills() {
    return this.jobForm.get('skills');
  }

  onSubmit() {
    let job = <Job>this.jobForm.value;
    console.log(job)

    //update
    if (this.edit) {
      this.jobsService.deleteJob(job.name).subscribe(response => {
        this.jobsService.addJob(job).subscribe(res => {
          if( res['result']['ok'] == 1) this.formSubmitted.emit('פרטי משרה עודכנו בהצלחה :)');
        })
      })

    } 

    //add
    else this.jobsService.addJob(job).subscribe(jobCreated => {
      this.formSubmitted.emit('נוספה לרשימת המשרות שלך :)');
    })

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.setValue([...this.skills.value, value.trim()]);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skill): void {
    const index = this.skills.value.indexOf(skill);

    if (index >= 0) {
      this.skills.value.splice(index, 1);
      this.skills.updateValueAndValidity();
    }
  }


}
