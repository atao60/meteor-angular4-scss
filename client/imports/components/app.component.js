import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import TitleService from '../services/title.service';
import NavigationService from '../services/navigation.service';

import template from './app.html';
import componentStyle from './app.css';

class AppComponent {

    static get annotations() {
        return [
            new Component({
                selector: "app",
	            providers: [TitleService, NavigationService],
		        template , 	// remarque : "templateUrl : 'app.html'," ne fonctionne pas avec Meteor -> utiliser import template
		        // styleUrls: ['app.css']
		        styles: [componentStyle.textContent]
            }),
        ];
    }
    
    constructor (router, titleService, navigationService) {

		this._titleService = titleService;
		this._titleService.set('Tour of Heroes');
		//console.log(this._titleService.get())
		this.title = this._titleService.get()
		
		this._navigationService = navigationService
		//this._navigationService.set(true) ;
		this.showNavigation = this._navigationService.get() ;
		
		this.router = router;
		
	}

	ngOnInit() {
	  this.router.events
		.subscribe((event) => {
			  if (event instanceof NavigationEnd) {
				  //console.log('NavigationEnd:', event);
				  if (event.url !== "/aboutus") {
					this._navigationService.set(true) ;
				  }
			  } else {
				  //console.log('Other Router Event:', event);
			  }
		});
	}	
}
AppComponent.parameters = [[Router], [TitleService], [NavigationService]];
export {AppComponent };