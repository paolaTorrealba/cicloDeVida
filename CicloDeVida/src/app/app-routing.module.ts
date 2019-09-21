import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { ErrorComponent } from './componentes/error/error.component';




const routes: Routes = [  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'error', component: ErrorComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }