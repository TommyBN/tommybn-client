import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { TodoWelcomeComponent } from './welcome/todo-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome' },
  { path: 'welcome', component: TodoWelcomeComponent},
  { path: ':id', component: AllJobsComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
