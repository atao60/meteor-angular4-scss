import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// export function loadExcelModule() {
//     return import('./excel/excel.module').then(({ ExcelModule }) => ExcelModule);
// };

// export function loadAboutModule() {
//     return module.dynamicImport('./about/about.module')
//         .then(({AboutModule}) => AboutModule);
// };
export function loadAboutModule() {
    return import('./about/about.module').then(({ AboutModule }) => AboutModule);
};

// export function loadDemosModule() {
//     return module.dynamicImport('./demos/demos.module')
//         .then(({ DemosModule }) => DemosModule);
// };

// import { Ng1RouteComponent } from './ng1route/ng1route.component';
// import { AboutUsComponent } from './aboutus/aboutUsComponent';
import { NgbDemo1Component } from './ngbdemo1/ngbDemo1Component';
import { PageNotFoundComponent } from './notfound/notfoundComponent';

const routes = [
    // { path: 'aboutus', component: AboutUsComponent },
    // { path: 'uigrid1', component: Ng1RouteComponent },
    // { path: 'excel', loadChildren: loadExcelModule },
    // { path: 'demos', loadChildren: loadDemosModule },
    { path: 'demo1', component: NgbDemo1Component },
    { path: 'help', loadChildren: loadAboutModule },
    { path: '', redirectTo: 'demo1', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export class RoutingModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    RouterModule.forRoot(routes, {
                        enableTracing: true // for debugging purposes only
                    })
                ],
                exports: [RouterModule]
            })
        ];
    }
};

export const routingComponents = [
    // AboutUsComponent,
    // Ng1RouteComponent,
    NgbDemo1Component,
    PageNotFoundComponent
];
