import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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

  displayedColumns: string[] = ['id', 'name', 'descripcion', 'criticidad', 'responsable', 'negocio', 'select'];
  dataSource = new MatTableDataSource<Servicios>(ELEMENT_DATA);
  selection = new SelectionModel<Servicios>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Servicios): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


