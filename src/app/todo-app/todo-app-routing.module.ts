import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './todo-user/user-main.component';
import { TodoWelcomeComponent } from './todo-welcome/todo-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome' },
  { path: 'welcome', component: TodoWelcomeComponent},
  { path: ':id', component: UserMainComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
