import { Component } from '@angular/core';

class PageNotFoundComponent {

    static get annotations() {
        return [
            new Component({
			    template : `
                    <h2>Page not found</h2>
                    <a class="nav-link" routerLink="/aboutus">About Us</a>
                `,
            }),
        ];
    }	 
}
export { PageNotFoundComponent };
