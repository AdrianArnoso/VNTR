import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';

@NgModule({
  imports: [
    CommonModule,
    SistemasRoutingModule
  ],
  declarations: [SistemasComponent]
})
export class SistemasModule { }
