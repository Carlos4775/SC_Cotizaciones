import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cotizaciones',
        loadChildren: () => import('./cotizaciones/cotizaciones-routing.module').then(m => m.CotizacionesRoutingModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    providers: []
})

export class ModulesRoutingModule { }
