import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';
import { ExternalizacionComponent } from './externalizacion/externalizacion.component';
import { NewActividadexternalizacionComponent } from './new-actividadexternalizacion/new-actividadexternalizacion.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: NewCatalogoserviciosComponent },
  { path: 'externalizacion', component: ExternalizacionComponent },
  { path: 'newActividadExternalizacion', component: NewActividadexternalizacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
