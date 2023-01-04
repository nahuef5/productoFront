import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './compo/detalle/detalle.component';
import { EditarComponent } from './compo/editar/editar.component';
import { ErrorComponent } from './compo/error/error.component';
import { ListaComponent } from './compo/lista/lista.component';
import { NuevoComponent } from './compo/nuevo/nuevo.component';

const routes: Routes = [
  {path:"lista", component:ListaComponent},
  {path:"", redirectTo:"lista", pathMatch:"full"},
  {path:"lista/detail/:id", component:DetalleComponent},
  {path:"create", component:NuevoComponent},
  {path:"lista/update/:id", component:EditarComponent},
  //{path:"**", component:ErrorComponent}
];//analizar el sistema de rutas comparar con routin5 de withPill

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
