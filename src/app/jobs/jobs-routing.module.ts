import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCompaniesComponent } from './companies/all-companies/all-companies.component';
import { TodoWelcomeComponent } from './welcome/todo-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome' },
  { path: 'welcome', component: TodoWelcomeComponent},
  { path: ':id', component: AllCompaniesComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
