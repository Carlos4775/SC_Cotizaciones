import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError as observableThrowError } from 'rxjs';
import { CotizacionesResolveVM, CotizacionesVM, CotizacionVM } from './cotizaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getList(searchQuery = '', pageNumber = 1, pageSize = 10): Observable<HttpResponse<CotizacionesVM[]>> {
    return this.http.get<CotizacionesVM[]>(this.baseUrl + `api/cotizaciones?SearchQuery=${searchQuery}&PageNumber=${pageNumber}&PageSize=${pageSize}`, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  public get(id: string): Observable<CotizacionesResolveVM> {
    return this.http.get<CotizacionesResolveVM>(this.baseUrl + 'api/cotizaciones/' + id).pipe(catchError(this.handleError));
  }

  public post(model: CotizacionVM) {
    return this.http.post(this.baseUrl + 'api/cotizaciones', model).pipe(catchError(this.handleError));
  }

  public put(model: CotizacionVM) {
    return this.http.put(this.baseUrl + 'api/cotizaciones/' + model.seqCertificacion, model).pipe(catchError(this.handleError));
  }

  public delete(id: number) {
    return this.http.delete(this.baseUrl + 'api/cotizaciones/' + id).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let error = err;
    return observableThrowError(() => new Error(error.message));
  }
}
