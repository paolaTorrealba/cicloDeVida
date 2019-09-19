import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
//agrego animaciones
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class LoginComponent implements OnInit {
  bounce: any;// variable para animacion
  public usuario: Usuario;
  public logueado: boolean;

  constructor() {
    this.usuario = new Usuario();
    this.logueado = false;
  }

  ngOnInit() {
  }

  Loguear() {
    this.logueado = true;
    console.info("el objeto",this.usuario)
  }

}
