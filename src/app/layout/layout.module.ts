import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { MatToolbarModule, MatTabsModule, MatSidenavModule, MatTableModule, MatSortModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SistemasComponent } from '../sistemas/sistemas.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';

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
    MatSortModule
  ],
  declarations: [PageNotFoundComponent, NavShellComponent, LoginComponent, SistemasComponent, UserInfoComponent],
  exports: [NavShellComponent]
})
export class LayoutModule { }
