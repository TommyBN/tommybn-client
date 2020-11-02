import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './welcome/main/main.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', component: MainComponent},
    { 
      path: 'todo',
      loadChildren: 
      () => import
      ('./todo-app/todo-app.module')
      // ('./todo-app/todo-app.module#TodoAppModule'),
      .then(m=>m.TodoAppModule),
      pathMatch:'prefix'
    },
    { 
      path: 'jobs',
      loadChildren: 
      () => import
      ('./jobs/jobs.module')
      // ('./todo-app/todo-app.module#TodoAppModule'),
      .then(m=>m.JobsModule),
      pathMatch:'prefix'
    }
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }