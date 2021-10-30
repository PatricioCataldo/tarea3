import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {FormularioComponent} from './formulario/formulario.component'
import {NoticiasComponent} from './noticias/noticias.component'

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'mensaje', component:FormularioComponent},
  {path:'noticias',component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
