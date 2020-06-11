import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';

const routes: Routes = [
  {path: 'catalogo', component: NewCatalogoserviciosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class NewCatalogoserviciosRoutingModule { }
