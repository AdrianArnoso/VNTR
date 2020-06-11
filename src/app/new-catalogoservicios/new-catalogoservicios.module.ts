import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCatalogoserviciosRoutingModule } from './new-catalogoservicios-routing.module';
import { NewCatalogoserviciosComponent } from './new-catalogoservicios/new-catalogoservicios.component';
import { FormCatalogoserviciosComponent } from './form-catalogoservicios/form-catalogoservicios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NewCatalogoserviciosRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [NewCatalogoserviciosComponent, FormCatalogoserviciosComponent]
})
export class NewCatalogoserviciosModule { }
