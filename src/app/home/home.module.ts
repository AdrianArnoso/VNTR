import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


import { FormCatalogoserviciosComponent } from './form-catalogoservicios/form-catalogoservicios.component';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  declarations: [HomeComponent, FormCatalogoserviciosComponent, NewCatalogoserviciosComponent]
})
export class HomeModule { }
