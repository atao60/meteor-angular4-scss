import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import AdresseService from '../../services/adresse.service';

class AdresseComponent {
    
    static get annotations() {
        return [
            new Component({
                selector: 'adresse-comp',
                providers: [AdresseService],
                template : `
                    adresse : {{monAdresse.street}} {{monAdresse.city}}
                    <label class="btn btn-xs btn-primary" 
                           (click)="changeCity()">
                        change</label>
                `,
                inputs: ['monAdresse'],
                outputs : ['emitValue'],
                host: {
                  'style' : 'color:white;',
                  'class' : 'bg-danger',
                  '(document:keyup)': 'onKeyUp($event)',
                  '(window:resize)': 'onResize($event)',
                  '(mouseover)': 'onMouseover($event)'
                }
            }),
        ];
    }     
        
    constructor (adresseService) {
        // Initialize emitValue
        this.emitValue = new EventEmitter();
      
        this._adresseService = adresseService;
        /*
        renderer.listen(elementRef.nativeElement, 'onmouseover', (event) => {
          // Do something with 'event'
          console.log('over');
        });
        */
        this.onKeyUp = function (ev) {
            //console.log(`The user just pressed ${ev.key}!`);
        };

        this.onResize = function (ev) {
            //console.log(`${ev.type}!`);
        };

        this.onMouseover = function (ev) {
            //console.log(`${ev.type}!`);
        };
    }

    // Available at ngOnInit lifecycle
    ngOnInit() { 
        //console.log(this.monAdresse);
    }

    // Value that the component will emit
    emit() {
        this.emitValue.emit(this.monAdresse);
    }
    
    changeCity() {
        var currentStreet = this.monAdresse.street;
        this.monAdresse = this._adresseService.get();
        this.monAdresse.street = currentStreet;
    }
    
}
AdresseComponent.parameters = [[AdresseService]];
export { AdresseComponent };
    
