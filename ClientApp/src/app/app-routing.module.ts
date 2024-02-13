import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { AppLayoutComponent } from './menu/app.layout.component';
import { LowerCaseUrlSerializer } from './url-serializer';

const routes: Routes = [
    {
        path: 'modules',
        component: AppLayoutComponent,
        loadChildren: () => import('./modules/modules.routing.module').then(m => m.ModulesRoutingModule)
    },
    {
        path: '',
        redirectTo: '/modules/cotizaciones',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'error'
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ]
})
export class AppRoutingModule { }