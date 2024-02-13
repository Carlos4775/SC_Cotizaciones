import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import language from '../assets/layout/component-language/es.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  spinner = false;

  constructor(
    private router: Router,
    private config: PrimeNGConfig
  ) {
    this.router.events.subscribe((value: any) => {
      this.checkRouterEvent(value);
    });
  }

  ngOnInit() {
    this.config.setTranslation(language.es);
  }

  private checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart && (routerEvent as NavigationStart).id == 1 && (routerEvent as NavigationStart).type == 0) {
      this.spinner = true;
    }

    if (routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError) {
      this.spinner = false;
    }
  }
}
