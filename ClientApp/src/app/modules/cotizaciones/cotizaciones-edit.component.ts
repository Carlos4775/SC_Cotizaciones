import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ToolsServices } from 'src/app/shared/tools.service';
import { CotizacionesResolveVM, CotizacionVM } from './cotizaciones.interface';
import { CotizacionesService } from './cotizaciones.service';
import { LayoutService } from 'src/app/menu/service/app.layout.service';
import { ExtraSelectVM, ProcessingEditVM, SelectVM } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-cotizaciones-edit',
  templateUrl: './cotizaciones-edit.component.html'
})
export class CotizacionesEditComponent implements OnInit {

  public cotizacionesControls = this.fbuilder.group({
    seqCotizacionN: [0],
    idTipoRamo: [0],
    numeroCotizacion: [''],
    sumaAsegurada: [0],
    fechaCotizacion: [new Date()],
    valorCotizacion: [0]
  });

  public cotizacion!: CotizacionVM;
  public tipoRamos!: ExtraSelectVM[];
  public operation = this.routerActivate.routeConfig?.path?.split('/').pop()?.toUpperCase();
  public itemId: number | null = null;
  public prefixValidator = 'CotizacionesEditComponent_';
  public errorMsj: { [key: string]: string } = {};
  public processing = {} as ProcessingEditVM;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public toolsService: ToolsServices,
    private fbuilder: FormBuilder,
    private router: Router,
    private routerActivate: ActivatedRoute,
    private cotizacionesService: CotizacionesService,
    private confirmationService: ConfirmationService,
    private readonly viewport: ViewportScroller,
    public layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.viewport.scrollToPosition([0, 0]);
    let resolve: CotizacionesResolveVM = this.routerActivate.snapshot.data["resolve"];
    this.tipoRamos = resolve.tipoRamos;
    console.log(resolve);
  }

  public save(): void {
    if (!this.cotizacionesControls.valid) {
      this.toolsService.validateAllFormFields(this.cotizacionesControls);
      this.errorMsj = this.toolsService.validateInputs(this.prefixValidator, this.cotizacionesControls) as {};
      return;
    }

    this.processing.save = true;
    let model = Object.assign({} as CotizacionVM, this.cotizacionesControls.getRawValue());
    if (this.operation == 'CREATE') {
      this.cotizacionesService.post(model)
        .pipe(
          takeUntil(this.unsubscribe$),
          finalize(() => this.processing.save = false)
        )
        .subscribe(() => this.router.navigate(['/modules/cotizaciones']));
    }

    if (this.operation == 'EDIT') {
      this.cotizacionesService.put(model)
        .pipe(
          takeUntil(this.unsubscribe$),
          finalize(() => this.processing.save = false)
        )
        .subscribe(() => this.router.navigate(['/modules/cotizaciones']));
    }
  }

  public cotizar(): void {
    const sumaAsegurada = this.cotizacionesControls.controls.sumaAsegurada.value;
    const tasa = this.tipoRamos.find(x => x.value == this.cotizacionesControls.controls.idTipoRamo.value?.toString())?.addedValue ?? '';

    const tasaNumerica: number = +tasa;

    let valorCotizacion = 0;

    if (sumaAsegurada && tasa) {
      valorCotizacion = sumaAsegurada * tasaNumerica;
    }

    this.cotizacionesControls.controls.valorCotizacion.setValue(valorCotizacion);
  }

  public delete(id: number): void {
    this.itemId = id;
    this.confirmationService.confirm({
      header: 'Eliminar cotización',
      key: 'confirmDialog',
      message: '¿Está seguro de que quiere realizar esta acción?',
    });
  }

  public confirmDelete(): void {
    this.processing.cancel = true;
    this.cotizacionesService.delete(this.itemId!)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => this.processing.cancel = false))
      .subscribe(() => {
        this.confirmationService.close();
        this.router.navigate(['/modules/cotizaciones']);
      });
  }
}
