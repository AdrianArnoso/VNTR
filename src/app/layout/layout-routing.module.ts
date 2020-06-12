import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { NewSistemaComponent } from '../sistemas/new-sistema/new-sistema.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sistemas/newSistema', component: NewSistemaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [ NewSistemaComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
