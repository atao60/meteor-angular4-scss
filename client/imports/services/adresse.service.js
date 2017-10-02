'use strict';

import { Injectable } from '@angular/core';

class AdresseService {

    constructor() {
        this.adresses = [
            { city: "75010 Paris", street: "rue du Paradis", id: 1 },
            { city: "44300 Nantes", street: "rue Bleue", id: 2 },
            { city: "29000 Brest", street: "rue de Siam", id: 3 }
        ];
        this.compteur = 1;
        //console.log("init AdresseService")
    }

    // works as a 'next' function
    get() {
        let courant = this.compteur;
        this.compteur++;
        if (this.compteur === this.adresses.length) this.compteur = 0;
        return this.adresses[courant];
    }

}

export default Injectable()(AdresseService);