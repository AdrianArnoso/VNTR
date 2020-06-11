import { Component, OnInit, ViewChild,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'abanca-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.scss']
})
export class SistemasComponent implements OnInit {
  columnas: string[] = ['id','sistemaInformacion','criticidad','borrar'];

  @ViewChild(MatSort) sort: MatSort;

  dataSource = null;

  datos: Sistema [] = [
    {id: 'SI00001', sistemaInformacion: 'Sistema de información patrimonial', criticidad: 'No'},
    {id: 'SI00002', sistemaInformacion: 'Sistema de información CRM operativo', criticidad: 'No'},
    {id: 'SI00003', sistemaInformacion: 'Sistema de información CRM analítico', criticidad: 'No'},
    {id: 'SI00004', sistemaInformacion: 'Sistema de información de comunicación al empleado', criticidad: 'No'},
    {id: 'SI00005', sistemaInformacion: 'Sistema de información de comunicación al empleado dffsdfdsfsfsdfdsffsdfsd', criticidad: 'No'},
    {id: 'SI00006', sistemaInformacion: 'Sistema de información de comunicación al empleado dffsdfdsfsfsdfdsffsdfsd', criticidad: 'No'},
  ];
  constructor() { 
    
  }

  ngOnInit() {
   this.dataSource = new MatTableDataSource<Sistema>(this.datos);
   this.dataSource.sort = this.sort;
  }

}

export class Sistema {
  constructor(public id: string, public sistemaInformacion: string, public criticidad: string){


  }
}
