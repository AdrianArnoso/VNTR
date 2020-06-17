import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatDividerModule, MatCheckbox, MatCheckboxModule, MatInputModule, } from '@angular/material';
import { NewSistemaComponent } from './new-sistema/new-sistema.component';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VerSistemaComponent } from './ver-sistema/ver-sistema.component';


@NgModule({
  imports: [
    CommonModule,
    SistemasRoutingModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent],
  exports: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent]
})
export class SistemasModule { }
