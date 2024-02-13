import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolsServices } from './shared/tools.service';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './menu/app.layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

function CaseInsensitiveBaseHrefFactory(platformLocation: PlatformLocation): string {
  const path = platformLocation.pathname;
  const baseHrefFromDOM = platformLocation.getBaseHrefFromDOM();
  // Get baseHref from Dom and remove start and end backslash.
  const baseHref = baseHrefFromDOM.replace(/(^\/*|\/*$)/g, '');
  // Case-insensitive match baseHref in the path ignoring start backslash.
  const caseInSensitiveBaseHrefRegexp = new RegExp(`^\/*${baseHref}`, 'i');
  const matchedBaseHref = path.match(caseInSensitiveBaseHrefRegexp);

  if (matchedBaseHref) {
    const remainingPath = path.slice(matchedBaseHref[0].length);
    // Deal with case which contains basePath but should not use matchedBaseHref. Eg: base = 'base', path='BaseBall'.
    // matchedBaseHref is the end of the path or follows with white space or a new segment which starts with backslash.
    const isValidMatch = !remainingPath || !!remainingPath.match(/^[\/\s]/);
    return isValidMatch ? matchedBaseHref[0] : baseHrefFromDOM;
  }

  return baseHrefFromDOM;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    ToolsServices,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useFactory: CaseInsensitiveBaseHrefFactory,
      deps: [PlatformLocation],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
