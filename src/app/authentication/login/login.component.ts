import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormResponse} from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-forms.css']
})
export class LoginComponent {

  SERVER_URL: string = `${environment.apiBaseUrl}/auth/login`;
  message: string;
  @Input() appName;


  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  onSubmit() {
    // this.http.post<FormResponse>(this.SERVER_URL, this.loginForm.value).subscribe(
      this.authService.logIn(this.loginForm.value).subscribe(
      (res) => {
        if(res.valid) {
          this.authService.setTokenAndID(res.id, res.token, res.userName)
          this.router.navigate([`../../${this.appName}`, res.id], {relativeTo: this.route})
        } 
        else {
          this.message = res.msg;
          this.loginForm.setErrors({'invalid': true})
        }
      },
    );

  }

}

