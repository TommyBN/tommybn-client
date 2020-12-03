import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './welcome/main/main.component';
import { AuthComponent } from './authentication/auth.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', component: MainComponent },
    { path: 'login/:appName', component: AuthComponent },
    { 
      path: 'todo',
      loadChildren: () => import('./todo/todo.module').then(m=>m.TodoModule),
      pathMatch:'prefix'
    },
    { 
      path: 'jobs',
      loadChildren: () => import('./jobs/jobs.module').then(m=>m.JobsModule),
      pathMatch:'prefix'
    }
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }