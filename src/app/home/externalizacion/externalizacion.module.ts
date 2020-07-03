import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalizacionRoutingModule } from './externalizacion-routing.module';
import { ExternalizacionComponent } from './externalizacion.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ExternalizacionRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule
  ],
  declarations: [ExternalizacionComponent]
})
export class ExternalizacionModule { }
