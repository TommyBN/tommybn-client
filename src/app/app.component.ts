import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  routedToApps: boolean = false;
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.url == '/home' || event.url == '/' || event.url == '/welcome' || event.url == '') {
          this.routedToApps = false
        }
        else {
          this.routedToApps = true
        }

      }
    });
  }

  ngDoCheck() {
    this.userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : null
  }

  onActivated() {
    window.scroll(0, 0)
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  signedIn() {
    if (localStorage.getItem('userToken')) return true
    else return false
  }




}
