import { version as NGJS_VERSION } from 'angular';
import { Component, VERSION as NG_VERSION } from '@angular/core';

import template from './about.html';
import componentStyle from './about.css';

export class AboutComponent {

	static get annotations() {
        return [
            new Component({
                selector: "app-about",
                // styleUrls: ["about.css"],
                styles: [componentStyle.textContent],
                template
            }),
        ];
    }	 
    
    constructor() {
        this.versions = {
            angularjs: NGJS_VERSION.full,
            angular: NG_VERSION.full
            // TODO tbd with any other package whose API publishes the version
        };
        import('moment').then(({ default: moment })=>{// load and use lodash 
            this.versions.moment = moment.version;
            return moment;
        });
        import('lodash').then(({ default: lodash })=>{// load and use lodash 
            this.versions.lodash = lodash.VERSION;
            return lodash;
        });
    }
};
