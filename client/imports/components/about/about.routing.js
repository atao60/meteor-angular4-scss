import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes = [
    { path: '', component: AboutComponent },
];

export class AboutRouting {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    RouterModule.forChild(routes, {
                        enableTracing: true // for debugging purposes only
                    })
                ],
                exports: [RouterModule]
            })
        ];
    }
};

export const aboutRoutingComponents = [
    AboutComponent
];
