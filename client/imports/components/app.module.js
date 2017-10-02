import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AdresseComponent } from './adresse/adresseComponent';

import { RoutingModule, routingComponents } from './app.routing';

export class AppModule {

    static get annotations() {
        return [
            new NgModule({
                imports: [
                    CommonModule,
                    NgbModule.forRoot(),
                    BrowserModule,               
                    HttpModule,
                    RoutingModule
                ],
                declarations: [
                    AppComponent,
                    AdresseComponent,
                    routingComponents
                ],
                bootstrap: [
                    AppComponent
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]            
            })
        ];
    }
};
