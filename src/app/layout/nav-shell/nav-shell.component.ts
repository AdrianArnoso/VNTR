import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTabChangeEvent} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
  

@Component({
  selector: 'abanca-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.scss']
})
export class NavShellComponent implements OnInit {

  tabIndex = 0 ;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
    this.navLinks = [
      {
        label: 'Catalogo de Servicios',
        link: '../home' ,
        index: 0
      },
      {
        label: 'Sistemas De Informacion',
        link: '../sistemas' ,
        index: 1
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '..' + this.router.url));
    });
  }


}
