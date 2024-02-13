import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { CotizacionesEditComponent } from './cotizaciones-edit.component';
import { CotizacionesEditResolver } from './cotizaciones-edit.resolver';
import { CotizacionesListComponent } from './cotizaciones-list.component';
import { CotizacionesListResolver } from './cotizaciones-list.resolver';
import { CotizacionesService } from './cotizaciones.service';

const routes: Routes = [
  { path: '', component: CotizacionesListComponent, resolve: { resolve: CotizacionesListResolver } },
  { path: ':id/view', component: CotizacionesEditComponent, resolve: { resolve: CotizacionesEditResolver } },
  { path: 'create', component: CotizacionesEditComponent, resolve: { resolve: CotizacionesEditResolver } },
  { path: ':id/edit', component: CotizacionesEditComponent, resolve: { resolve: CotizacionesEditResolver } }
];

@NgModule({
  declarations: [
    CotizacionesListComponent,
    CotizacionesEditComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [
    CotizacionesService,
    CotizacionesEditResolver,
    CotizacionesListResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CotizacionesRoutingModule { }
