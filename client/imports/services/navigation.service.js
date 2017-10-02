'use strict';

import { Injectable } from '@angular/core';

class NavigationService {

    constructor() {
        this.show = true;
        //console.log("init TitleService")
    }

    get() {
        return this.show;
    }

    set(show) {
        this.show = show;
    }
}

export default Injectable()(NavigationService);

