import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatDividerModule, MatCheckbox, MatCheckboxModule, MatInputModule, MatIconModule, MatTooltipModule, } from '@angular/material';
import { NewSistemaComponent } from './new-sistema/new-sistema.component';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VerSistemaComponent } from './ver-sistema/ver-sistema.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModifySistemasComponent } from './modify-sistemas/modify-sistemas.component';
import { FormModifySistemasComponent } from './form-modify-sistemas/form-modify-sistemas.component';

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
    MatCheckboxModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent, ModifySistemasComponent, FormModifySistemasComponent],
  exports: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent]
})
export class SistemasModule { }
