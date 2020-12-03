import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  appName: string;
  funkyText: string;
  title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {

    // setup app stuff
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.appName = params.get('appName');
      if( this.authService.checkUserToken() instanceof Observable ) {
        this.authService.checkUserToken().subscribe(res => {
          if (res.valid) {
            this.router.navigate([`../../${this.appName}`, res.id], { relativeTo: this.activatedRoute })
          }
          else {
            this.title = this.appName == 'todo' ? 'נעשה ונשמע' : 'בוא נמצא עבודה';
            this.funkyText = this.appName == 'todo' ? 'הכל מסתכם במשימה אחת פשוטה' : 'ריכוז פרטים לגבי משרות ששלחתי אליהם קורות חיים. הכל במקום אחד.'
          }
        })
      }
    })
  }





}