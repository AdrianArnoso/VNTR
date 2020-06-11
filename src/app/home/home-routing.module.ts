import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: NewCatalogoserviciosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
