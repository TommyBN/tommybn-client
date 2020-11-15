import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsRoutingModule } from './jobs-routing.module';
import { LoginComponent } from './welcome/login/login.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { TodoWelcomeComponent } from './welcome/todo-welcome.component';
import { JobsService } from './jobs.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AllJobsComponent,
    AddJobComponent,
    TodoWelcomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JobsRoutingModule,
    MatInputModule, MatButtonModule, MatDialogModule
  ],
  providers: [JobsService],
  bootstrap: []
})
export class JobsModule { }
