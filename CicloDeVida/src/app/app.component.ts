import { Component } from '@angular/core';
//agrego animaciones
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

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
}
