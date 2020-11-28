import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ChipsComponent } from './add-job/chips/chips.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsService } from './jobs.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ChecksComponent } from './add-job/checks/checks.component';

@NgModule({
  declarations: [
    AllJobsComponent,
    AddJobComponent,
    ChipsComponent,
    ChecksComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    JobsRoutingModule,
    MatInputModule, MatButtonModule, MatDialogModule, 
    MatDividerModule, MatChipsModule, MatCheckboxModule, 
    MatRadioModule
  ],
  providers: [JobsService],
  bootstrap: []
})
export class JobsModule { }
