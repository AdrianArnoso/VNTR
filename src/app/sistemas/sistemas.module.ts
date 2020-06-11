import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, } from '@angular/material';
import { NewSistemaComponent } from './new-sistema/new-sistema.component';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';


@NgModule({
  imports: [
    CommonModule,
    SistemasRoutingModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  declarations: [SistemasComponent, NewSistemaComponent, FormSistemaComponent]
})
export class SistemasModule { }
