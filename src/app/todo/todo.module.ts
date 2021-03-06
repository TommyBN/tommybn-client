import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SplitterModule } from '@progress/kendo-angular-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TodoRoutingModule } from './todo-routing.module';
import { UserMainComponent } from './todo-user/user-main.component';
import { AllTodosComponent } from './todo-user/todo/all-todos/all-todos.component';
import { EditTodoComponent } from './todo-user/todo/edit/edit-todo.component';
import { CalendarComponent } from './todo-user/calendar/calendar.component';
import { CalendarHeaderComponent } from './todo-user/calendar/month/header/calendar-header.component';
import { CalMonthComponent } from './todo-user/calendar/month/cal-month.component';
import { CalDayComponent } from './todo-user/calendar/day/cal-day.component';
import { UserService } from './todo-user/user.service';
import { TodoService } from './todo-user/todo/todo.service';
import { DayHeaderComponent } from './todo-user/calendar/day/day-header/day-header.component';


@NgModule({
  declarations: [
    UserMainComponent,
    AllTodosComponent,
    EditTodoComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalMonthComponent,
    CalDayComponent,
    DayHeaderComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SplitterModule,
    MatInputModule, MatButtonModule, MatDialogModule, MatCheckboxModule
  ],
  providers: [
    UserService,
    TodoService,
  ]
})
export class TodoModule { }
