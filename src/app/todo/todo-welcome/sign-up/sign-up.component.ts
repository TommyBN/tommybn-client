import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

export interface FormResponse {
  valid: boolean,
  msg: string,
  id?: string
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth-forms.css']
})
export class SignUpComponent {

  SERVER_URL: string = `${environment.apiBaseUrl}/auth/signup`;
  passConfirm: string;
  message: string;
  newUserSignedUp: boolean = false;

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passConfirm: new FormControl('')
  })

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit() {
    if(this.signUpForm.get('password').value != this.signUpForm.get('passConfirm').value) {
      this.message = 'הסיסמאות אינן תואמות';
      this.signUpForm.setErrors({'invalid': true})
    }
    if(this.signUpForm.valid) {
      this.http.post<FormResponse>(this.SERVER_URL, this.signUpForm.value)
      .subscribe( res => {
        if(res.valid) this.newUserSignedUp = true;
        else {
          this.message = res.msg;
          this.signUpForm.setErrors({'invalid': true});
        } 
        
      })
    }
    else {
      console.log('form not valid for some reason')
    }
  }
}