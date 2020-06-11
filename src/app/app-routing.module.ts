import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { LoginComponent } from './layout/login/login.component';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios/new-catalogoservicios.component';
import { NewCatalogoserviciosModule } from './new-catalogoservicios/new-catalogoservicios.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sistemas', component: SistemasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: NewCatalogoserviciosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes , { useHash: true } ),
    HomeModule,
    NewCatalogoserviciosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
