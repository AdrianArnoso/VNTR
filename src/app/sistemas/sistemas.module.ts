import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, } from '@angular/material';


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
  declarations: [SistemasComponent]
})
export class SistemasModule { }
