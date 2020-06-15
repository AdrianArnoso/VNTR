import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { MatToolbarModule, MatTabsModule, MatSidenavModule, MatTableModule, MatSortModule, MatSlideToggleModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SistemasComponent } from '../sistemas/sistemas.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormSistemaComponent } from '../sistemas/form-sistema/form-sistema.component';
import { SistemasModule } from '../sistemas/sistemas.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTableModule,
    SharedModule,
    CommonModule,
    RouterModule,
    MatSortModule,
    SistemasModule,
    MatSlideToggleModule
  ],
  declarations: [PageNotFoundComponent, NavShellComponent, LoginComponent, UserInfoComponent],
  exports: [NavShellComponent]
})
export class LayoutModule { }
