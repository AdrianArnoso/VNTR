import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { TareasService } from '../tareas.service';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

export interface Servicios {
  name: string;
  id: string;
  descripcion: string;
  criticidad: string;
  responsable: string;
  negocio: string;
}

const ELEMENT_DATA: Servicios[] = [
  // {id: "STI05", name: 'Desarrollo y Mantenimiento de Software', descripcion: "", criticidad: 'B', responsable: "Arnoso", negocio: "ABANCA España"},
  // {id: "STI06", name: 'Implantación y Configuración de Productos', descripcion: "", criticidad: 'C', responsable: "Quijano", negocio: "ABANCA USA"},
  // {id: "STI07", name: 'Instalación y retirada de equipamiento TIC', descripcion: "", criticidad: 'C', responsable: "Fraga", negocio: "ABANCA Portugal"},

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
  negocios;
  fileName= 'CatalogoServicios.xlsx';  
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  serviciosList$: Observable<any[]>;

  constructor(tareasService: TareasService, private apiService: ApiService, private fb: FormBuilder) {
    this.rol = tareasService.getRol();
    this.responsables = tareasService.getResponsables();
    this.serviciosList$ = apiService.getServicios$();
    this.negocios = tareasService.getNegocios();
  }

  actServiciosSearch = this.fb.group({
    id: [null],
    name_servicio: [null],
    criticidad_servicio: [null],
    responsable: [null],
    negocio: [null],
    });

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['id', 'name', 'descripcion', 'criticidad', 'responsable', 'negocio', /*'select' ,*/ 'boton'];
  dataSource = new MatTableDataSource<Servicios>(ELEMENT_DATA);
  selection = new SelectionModel<Servicios>(true, []);

  exportexcel(): void {
       
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
   
  }
  onReset(){
   this.actServiciosSearch.reset();
  }
  SearchServicio(){
    console.log(this.actServiciosSearch.value);
    this.apiService.getServicioSearch$(this.actServiciosSearch.value).subscribe();
  }
  DeleteServicio(id){
    console.log(id);
    return this.apiService.DeleteServicios$(id).subscribe();
  }
  

}


