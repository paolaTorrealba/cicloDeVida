import { Component } from '@angular/core';
//agrego animaciones
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class AppComponent {
  bounce: any;// variable para animacion
  title = 'Login';

  //agrego ruteo con animacion
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

