import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoWelcomeComponent } from './todo-welcome/todo-welcome.component';
import { LoginComponent } from './todo-welcome/login/login.component';
import { SignUpComponent } from './todo-welcome/sign-up/sign-up.component';
import { UserMainComponent } from './todo-user/user-main.component';
import { AllTodosComponent } from './todo-user/todo/all-todos/all-todos.component';
import { EditTodoComponent } from './todo-user/todo/edit/edit-todo.component';
import { CalendarComponent } from './todo-user/calendar/calendar.component';
import { CalendarHeaderComponent } from './todo-user/calendar/month/header/calendar-header.component';
import { CalMonthComponent } from './todo-user/calendar/month/cal-month.component';
import { CalDayComponent } from './todo-user/calendar/day/cal-day.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SplitterModule} from '@progress/kendo-angular-layout';
import { UserService } from './todo-user/user.service';
import { TodoService } from './todo-user/todo/todo.service';
import { EventsService } from './todo-user/calendar/events.service';

@NgModule({
  declarations: [
    TodoWelcomeComponent,
    LoginComponent,
    SignUpComponent,
    UserMainComponent,
    AllTodosComponent,
    EditTodoComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalMonthComponent,
    CalDayComponent
    
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SplitterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    UserService,
    TodoService,
    EventsService
  ]
})
export class TodoAppModule { }
