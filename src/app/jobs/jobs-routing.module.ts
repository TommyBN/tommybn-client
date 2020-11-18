import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

const routes: Routes = [
  { path: ':id', component: AllJobsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
