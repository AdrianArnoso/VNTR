import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

export interface Extarnilacion {
  Se: String;
  Id_Actividad: string;
  Descripcion: string;
  Externalizacion: string;
  Criticidad:string;
  Altia:string;
  Indra: string;
}





const ELEMENT_DATA02: Extarnilacion[] = [
  {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo de nuevas soluciones',Externalizacion: 'SI',Criticidad:'B',Altia: 'X',Indra: 'X'},
  {Se: '0', Id_Actividad: 'ST01', Descripcion: 'Servicios de desarrollo derivados de cambios',Externalizacion: 'SI',Criticidad:'A',Altia: '',Indra: 'X'}
  
];

@Component({
  selector: 'abanca-externalizacion',
  templateUrl: './externalizacion.component.html',
  styleUrls: ['./externalizacion.component.scss']
})
export class ExternalizacionComponent implements OnInit {

  displayedColumns: string[] = ['Se', 'Id_Actividad', 'Descripcion', 'Externalizacion','Criticidad','Altia','Indra'];
  dataSource = ELEMENT_DATA02;
  constructor() { }

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
  }

}
