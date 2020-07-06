import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { NewSistemaComponent } from '../sistemas/new-sistema/new-sistema.component';
import { VerSistemaComponent } from '../sistemas/ver-sistema/ver-sistema.component';
import { ModifySistemasComponent } from '../sistemas/modify-sistemas/modify-sistemas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sistemas/newSistema', component: NewSistemaComponent },
  { path: 'sistemas/verSistema/:id', component: VerSistemaComponent },
  { path: 'sistemas/modSistema/:id', component: ModifySistemasComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
