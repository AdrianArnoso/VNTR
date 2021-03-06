import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { TareasService } from "src/app/tareas.service";
import { MatPaginator } from "@angular/material/paginator";
import * as XLSX from "xlsx";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Observable } from "rxjs";
import { Location } from "@angular/common";



@Component({
  selector: "abanca-externalizacion",
  templateUrl: "./externalizacion.component.html",
  styleUrls: ["./externalizacion.component.scss"],
})
export class ExternalizacionComponent implements OnInit {
  displayedColumns: string[];
  rol: boolean;
  fileName = "Externalizaciones.xlsx";
  serviceById$: Observable<any[]>;
  empresas; 
  dataSource;
  // dataSource = ELEMENT_DATA02;
  constructor(
    tareasService: TareasService,
    activatedRoute: ActivatedRoute,
    api: ApiService,
    private location: Location
  ) {
    this.rol = tareasService.getRol();
    this.empresas = tareasService.getEmpresasExternalizadas();
    this.displayedColumns = [
      // "Se",
      "id_Actividad",
      "descripcion",
      "externalizacion",
      "criticidad",
    ];
    for(let i=0 ; i < this.empresas.length ; i++){
      this.displayedColumns.push(this.empresas[i].name);
    }
    this.displayedColumns.push("Buttons");
    const serviceId = activatedRoute.snapshot.params.id;
    console.log("value: " + serviceId);
    console.log(this.displayedColumns);
    this.serviceById$ = api.getServicioById$(serviceId);

    api.getExternalizacion$().subscribe(data =>{
      this.dataSource = new MatTableDataSource<Externalizacion>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });


  }
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // datos: Externalizacion[] = [
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo de nuevas soluciones",
  //     Externalizacion: "SI",
  //     Criticidad: "B",
  //     Empresas:[false,false,true,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST02",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST03",
  //     Descripcion: "Servicios de desarrollo de nuevas soluciones",
  //     Externalizacion: "SI",
  //     Criticidad: "B",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo de nuevas soluciones",
  //     Externalizacion: "SI",
  //     Criticidad: "B",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo de nuevas soluciones",
  //     Externalizacion: "SI",
  //     Criticidad: "B",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo de nuevas soluciones",
  //     Externalizacion: "SI",
  //     Criticidad: "B",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
  //   },
  //   {
  //     // Se: "0",
  //     Id_Actividad: "ST01",
  //     Descripcion: "Servicios de desarrollo derivados de cambios",
  //     Externalizacion: "SI",
  //     Criticidad: "A",
  //     Empresas:[true,false,false,false,true,true,false,false,true,true,true,true,true]
  //   },
  // ];

  
  
  

  // dataSource = new MatTableDataSource<Externalizacion>(this.datos);

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource);
  }
  exportexcel(): void {
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }

  goBack() {
    this.location.back();
  }
}

export class Externalizacion {
  constructor(
    // public Se: string,
    public Id_Actividad: string,
    public Descripcion: string,
    public Externalizacion: string,
    public Criticidad: string,
    public Empresas: boolean[],
  ) {}
}
