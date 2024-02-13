import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CotizacionesVM } from './cotizaciones.interface';
import { CotizacionesService } from './cotizaciones.service';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesListResolver implements Resolve<HttpResponse<CotizacionesVM[]>> {
  constructor(private cotizacionesService: CotizacionesService) {
  }
  resolve(): Observable<HttpResponse<CotizacionesVM[]>> {
    var a = this.cotizacionesService.getList();
    return this.cotizacionesService.getList();
  }
}
