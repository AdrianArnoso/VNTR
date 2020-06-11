import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSistemaComponent } from './new-sistema/new-sistema.component';
import { SistemasComponent } from './sistemas.component';

const routes: Routes = [
  { path: 'newSistema', component: NewSistemaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class SistemasRoutingModule { }
