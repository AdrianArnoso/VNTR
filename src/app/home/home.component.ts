import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { TareasService } from '../tareas.service';
import { MatPaginator } from '@angular/material/paginator';

export interface Servicios {
  name: string;
  id: string;
  descripcion: string;
  criticidad: string;
  responsable: string;
  negocio: string;
}

const ELEMENT_DATA: Servicios[] = [
  {id: "STI01", name: 'Desarrollo y Mantenimiento de Software', descripcion: "", criticidad: 'B', responsable: "Arnoso", negocio: "ABANCA España"},
  {id: "STI02", name: 'Implantación y Configuración de Productos', descripcion: "", criticidad: 'C', responsable: "Quijano", negocio: "ABANCA USA"},
  {id: "STI03", name: 'Instalación y retirada de equipamiento TIC', descripcion: "", criticidad: 'C', responsable: "Fraga", negocio: "ABANCA Portugal"},

];

@Component({
  selector: 'abanca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  rol: boolean;
  responsables;

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(tareasService: TareasService) {
    this.rol = tareasService.getRol();
    this.responsables = tareasService.getResponsables();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['id', 'name', 'descripcion', 'criticidad', 'responsable', 'negocio', /*'select' ,*/ 'boton'];
  dataSource = new MatTableDataSource<Servicios>(ELEMENT_DATA);
  selection = new SelectionModel<Servicios>(true, []);

}


