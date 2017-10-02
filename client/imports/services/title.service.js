'use strict';

import { Injectable } from '@angular/core';

class TitleService {

    constructor() {
        this.title = 'Tour of Heroes';
        //console.log("init TitleService")
    }

    get() {
        return this.title;
    }

    set(title) {
        this.title = title;
    }
}

export default Injectable()(TitleService);

