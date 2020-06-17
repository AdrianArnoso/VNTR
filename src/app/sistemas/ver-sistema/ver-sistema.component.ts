import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TareasService } from '../../tareas.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'abanca-ver-sistema',
  templateUrl: './ver-sistema.component.html',
  styleUrls: ['./ver-sistema.component.scss']
})
export class VerSistemaComponent implements OnInit {
  sistema = {id:"Ejemplo ID",sistemaInformacion:"Ejemplo Sistema Información",criticidad:"Ejemplo criticidad"}
  familias: Object;
/*
  columnasMostradas: string[] = ['id','sistemaInformacion','criticidad'];

  @ViewChild(MatSort) sort: MatSort;
  rol: boolean;
  columnas=[
    {titulo: "ID", name: "id"},
    {titulo: "Sistema de información", name: "sistemaInformacion"},
    {titulo: "Criticidad", name: "criticidad"},
    
  ];

  datos: Sistema [] = [
    {id: 'SI00001', sistemaInformacion: 'Sistema de información patrimonial', criticidad: 'No'},
    {id: 'SI00002', sistemaInformacion: 'Sistema de información CRM operativo', criticidad: 'No'},
    {id: 'SI00003', sistemaInformacion: 'Sistema de información CRM analítico', criticidad: 'No'},
    {id: 'SI00004', sistemaInformacion: 'Sistema de información de comunicación al empleado', criticidad: 'No'},
    {id: 'SI00005', sistemaInformacion: 'Sistema de información de mensajería y colaboración', criticidad: 'No'},
    {id: 'SI00006', sistemaInformacion: 'Sistema de información de gestión operativa', criticidad: 'No'},
  ];
  dataSource = new MatTableDataSource<Sistema>(this.datos);
  */
  constructor(private tareasService: TareasService) { 
    this.familias = tareasService.getFamilias();
    //this.rol = tareasService.getRol();
  }
  
  
  ngOnInit() {
   
  // this.dataSource.sort = this.sort;
  }

}
/*
export class Sistema {
  constructor(public id: string, public sistemaInformacion: string, public criticidad: string){


  }
  

}
*/