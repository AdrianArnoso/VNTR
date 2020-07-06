import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerSistemaRoutingModule } from './ver-sistema-routing.module';
import { VerSistemaComponent } from './ver-sistema.component';
import { MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    VerSistemaRoutingModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [VerSistemaComponent]
})
export class VerSistemaModule { }
