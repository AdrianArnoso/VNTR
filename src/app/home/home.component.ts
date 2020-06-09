import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'name', 'descripcion', 'criticidad', 'responsable', 'negocio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


