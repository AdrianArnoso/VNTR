import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';
import { ExternalizacionComponent } from './externalizacion/externalizacion.component';
import { NewActividadexternalizacionComponent } from './new-actividadexternalizacion/new-actividadexternalizacion.component';
import { LoginComponent } from '../layout/login/login.component';
import { ModifyCatalogoserviciosComponent } from './modify-catalogoservicios/modify-catalogoservicios.component';


const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: NewCatalogoserviciosComponent },
  { path: 'modCatalogo/:id', component: ModifyCatalogoserviciosComponent },
  { path: 'externalizacion/:id', component: ExternalizacionComponent },
  { path: 'newActividadExternalizacion', component: NewActividadexternalizacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
