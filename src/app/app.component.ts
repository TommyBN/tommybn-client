import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  routedToApps: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
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

  onActivated() {
    window.scroll(0, 0)
  }




}
