import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showWaitInfo: boolean;

  showBasket: boolean = true;
  constructor(
    private router: Router) {
  }

  toggleBasket(): void {
    this.showBasket = !this.showBasket;
  }

  initRouterEvents() {
    this.router.events.subscribe(
      (event) => {

        console.debug('router-event', event);

        if (event instanceof NavigationStart) {
          this.showWaitInfo = true;
        }
        if (event instanceof NavigationEnd
          || event instanceof NavigationCancel
          || event instanceof NavigationError) {
          this.showWaitInfo = false;
        }

      }
    );
  }


}
