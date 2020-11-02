import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AllCompaniesComponent } from './companies/all-companies/all-companies.component';
import { AddJobComponent } from './add-job/add-job.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AllCompaniesComponent,
    AddJobComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class JobsModule { }
