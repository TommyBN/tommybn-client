import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormResponse} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../todo-welcome-forms.css']
})
export class LoginComponent {

  SERVER_URL: string = `${environment.apiBaseUrl}/users/login`;
  message: string;


  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onSubmit() {
    this.http.post<FormResponse>(this.SERVER_URL, this.loginForm.value).subscribe(
      (res) => {
        if(res.valid) this.router.navigate(['../', res.id], {relativeTo: this.route})
        else {
          this.message = res.msg;
          this.loginForm.setErrors({'invalid': true})
        }
      },
    );

  }

}

