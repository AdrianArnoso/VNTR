import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

  //  export interface Extarnilacion {
  //   Se: String;
  //   Id_Actividad: string;
  //   Descripcion: string;
  //   Externalizacion: string;
  //   Criticidad:string;
  //   Altia:string;
  //   Indra: string;
  //  }





  // const ELEMENT_DATA02: Extarnilacion[] = [
  //   {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo de nuevas soluciones',Externalizacion: 'SI',Criticidad:'B',Altia: 'X',Indra: 'X'},
  //   {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo derivados de cambios',Externalizacion: 'SI',Criticidad:'A',Altia: '',Indra: 'X'}
    
  // ];

@Component({
  selector: 'abanca-externalizacion',
  templateUrl: './externalizacion.component.html',
  styleUrls: ['./externalizacion.component.scss']
})
export class ExternalizacionComponent implements OnInit {

  displayedColumns: string[] = ['Se', 'Id_Actividad', 'Descripcion', 'Externalizacion','Criticidad','Altia','Indra'];
  // dataSource = ELEMENT_DATA02;
  constructor() { }
  
  
   @ViewChild(MatSort) sort: MatSort;

     datos: Externalizacion[] = [
    {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo de nuevas soluciones',Externalizacion: 'SI',Criticidad:'B',Altia: 'X',Indra: 'X'},
    {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo derivados de cambios',Externalizacion: 'SI',Criticidad:'A',Altia: '',Indra: 'X'}
    
   ];
   


  dataSource = new MatTableDataSource<Externalizacion>(this.datos);
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

  export class Externalizacion {
    constructor(public Se: string, public Id_Actividad: string, public Descripcion: string, public Externalizacion: string, public Criticidad: string, public Altia: string, public Indra: string){
  
  
    }

}
