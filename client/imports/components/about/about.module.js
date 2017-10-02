import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { AboutRouting, aboutRoutingComponents } from './about.routing';

export class AboutModule {

    static get annotations() {
        return [
            new NgModule({
                imports: [
                    CommonModule,
                    NgbModule,
                    AboutRouting
                ],
                declarations: [
                    aboutRoutingComponents
                ],
                exports: [
                    aboutRoutingComponents
                ]
            })
        ];
    }
};
