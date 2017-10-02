import { Meteor } from 'meteor/meteor';

import { Component } from '@angular/core';

import AdresseService from '../../services/adresse.service';
import TitleService from '../../services/title.service'
import NavigationService from '../../services/navigation.service';

// import template from './ngbdemo1.html';
import style from './ngbdemo1.css';
// require('./ngbdemo1.css');


class NgbDemo1Component {
    
    static get annotations() {
        return [
            new Component({
                // styleUrls: ['./ngbdemo1.css'],
                styles: [style.textContent],
                // template
                template: require('./ngbdemo1.html').default
            }),
        ];
    }     
        
    constructor (titleService, navigationService) {
        this._titleService = titleService;
        this.title = this._titleService.get();
      
        this._navigationService = navigationService;
        this._navigationService.set(true) ;
      
        this.statut = false;
        this.zone = Zone.current ;
        this.alignement = "left";
        this.person = 'John Doe'; 
        this.age = 30; 
        this.address = {id: 1, street:'2 rue du Paradis', city:'75010 Paris'};
        this.testMethod = "vide";
        this.updateTestMethod("ctor");      
        
    }
    
    updateTestMethod = function (mes) {
        Meteor.call('testeMethod', mes, (err, data) => {        
            if (err) {
                console.log('testeMethod error: ', err);
                throw err;    
            } 

            // the async call result is outside Zone thus not triggering the UI update
            this.zone.run(() => { 
                this.testMethod = data;
            });
        });
    }

    onoff() {
        this.currentvalue = document.getElementById('onoff').value;
        Meteor.call('incrementCompteur', 1, function (err, data) {    
            if (err) console.log ("erreurs :"+err);
                //if (data) console.log ("nbre de docs mis à jour : " + data);
        });
        if(this.currentvalue == "Off") {
            document.getElementById("onoff").value="On";
            this.statut =true;
            this.alignement = "right";
            this.updateTestMethod("right");
        } else {
            document.getElementById("onoff").value="Off";
            this.statut = false;
            this.alignement = "left";
            this.updateTestMethod("left");
        }
    }
    
    getStatusOnoff  ()  {
        this.currentvalue = document.getElementById('onoff').value;
        return this.currentvalue === "On" ? true : false;
    }
    
    extrait (texte) {
        return texte.substr(0,4);
    }
          
    testMethodFunction () {
        return this.testMethod;
    }
}
NgbDemo1Component.parameters = [[TitleService], [NavigationService]];
export { NgbDemo1Component };