import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { first, Observable } from 'rxjs';
import { CotizacionesResolveVM } from './cotizaciones.interface';
import { CotizacionesService } from './cotizaciones.service';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesEditResolver implements Resolve<CotizacionesResolveVM> {
  constructor(
    private cotizacionesService: CotizacionesService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CotizacionesResolveVM> {
    let id = route.params['id'];
    if (id == undefined) { id = '0'; }

    return this.cotizacionesService.get(id).pipe(first());
  }
}
