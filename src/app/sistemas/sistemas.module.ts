import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { MatSortModule, MatButtonModule, MatTableModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatDividerModule, MatCheckbox, MatCheckboxModule, MatInputModule, } from '@angular/material';
import { NewSistemaComponent } from './new-sistema/new-sistema.component';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { VerSistemaComponent } from './ver-sistema/ver-sistema.component';
=======
import {MatPaginatorModule} from '@angular/material/paginator';
>>>>>>> 934d43bd26d48bd609a503fa5394a6af162c1558


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
    MatPaginatorModule
  ],
  declarations: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent],
  exports: [SistemasComponent, NewSistemaComponent, FormSistemaComponent,VerSistemaComponent]
})
export class SistemasModule { }
