import { HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    request = request.clone({
      withCredentials: true
    });

    return next.handle(request)
      .pipe(
        tap(res => {
          if ((<HttpResponse<any>>res).status == 204) {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Operación realizada con éxito.', life: 5000 });
          }
        }),
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401: { //Unauthorized
                sessionStorage.clear();
                this.router.navigate(['/access']);
                break;
              }

              case 400: { //BadRequest
                this.messageService.add({ severity: 'error', summary: 'Información', detail: err.error.Errors[0], life: 10000 });
                break;
              }

              case 500: { //Error
                this.router.navigate(['/error']);
                break;
              }
            }
          }

          return observableThrowError(() => new Error(err.message));
        }));
  }
}