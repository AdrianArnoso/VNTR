import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerSistemaRoutingModule } from './ver-sistema-routing.module';
import { VerSistemaComponent } from './ver-sistema.component';

@NgModule({
  imports: [
    CommonModule,
    VerSistemaRoutingModule
  ],
  declarations: [VerSistemaComponent]
})
export class VerSistemaModule { }
