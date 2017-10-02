import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'reflect-metadata'; // here location matters: has to be before import of AppModule

import { AppModule } from './imports/components/app.module';

import 'zone.js'; // here location matters: has to be after import of AppModule
                  // Note: this import loads 'zone.js' itself but also 'long-stack-trace-zone'

platformBrowserDynamic().bootstrapModule(AppModule)
.then((ref) => console.log("App is running"))
.catch((err) => console.error(err));
