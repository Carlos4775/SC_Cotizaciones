import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { finalize, Subject, takeUntil } from 'rxjs';
import { PaginationVM } from 'src/app/shared/shared.model';
import { ProcessingListVM } from '../../shared/shared.model';
import { CotizacionesVM } from './cotizaciones.interface';
import { CotizacionesService } from './cotizaciones.service';

@Component({
  selector: 'app-cotizaciones-list',
  templateUrl: './cotizaciones-list.component.html'
})
export class CotizacionesListComponent implements OnInit {
  public searchQuery = '';
  public cotizaciones!: CotizacionesVM[];
  public pagination = {} as PaginationVM;
  public itemId: number | null = null;
  public processing = {} as ProcessingListVM;
  public display: boolean = false;
  public employeeName!: string;

  @ViewChild('pg') tablePaginator: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private routerActivate: ActivatedRoute,
    private cotizacionesService: CotizacionesService,
    private confirmationService: ConfirmationService
  ) { }

  public ngOnInit(): void {
    let resolve = this.routerActivate.snapshot.data["resolve"];
    this.cotizaciones = resolve.body
    this.pagination = JSON.parse(resolve.headers.get('X-Pagination'));
  }

  showDialog() {
    this.display = true;
  }


  public delete(id: number): void {
    this.itemId = id;
    this.confirmationService.confirm({
      header: 'Eliminar cotización',
      key: 'confirmDialog',
      message: '¿Está seguro de que quiere realizar esta acción?',
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
