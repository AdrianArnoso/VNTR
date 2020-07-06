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
  selector: "abanca-externalizacion",
  templateUrl: "./externalizacion.component.html",
  styleUrls: ["./externalizacion.component.scss"],
})
export class ExternalizacionComponent implements OnInit {
  displayedColumns: string[] = [
    // "Se",
    "Id_Actividad",
    "Descripcion",
    "Externalizacion",
    "Criticidad",
    "Altia",
    "Indra",
    "Buttons",
  ];
  rol: boolean;
  fileName = "Externalizaciones.xlsx";
  serviceById$: Observable<any[]>;
  // dataSource = ELEMENT_DATA02;
  constructor(
    tareasService: TareasService,
    activatedRoute: ActivatedRoute,
    api: ApiService,
    private location: Location
  ) {
    this.rol = tareasService.getRol();

    const serviceId = activatedRoute.snapshot.params.id;
    console.log("value: " + serviceId);
    this.serviceById$ = api.getServicioById$(serviceId);
  }
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  datos: Externalizacion[] = [
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo de nuevas soluciones",
      Externalizacion: "SI",
      Criticidad: "B",
      Altia: "X",
      Indra: "X",
    },
    {
      // Se: "0",
      Id_Actividad: "ST01",
      Descripcion: "Servicios de desarrollo derivados de cambios",
      Externalizacion: "SI",
      Criticidad: "A",
      Altia: "",
      Indra: "X",
    },
  ];

  dataSource = new MatTableDataSource<Externalizacion>(this.datos);
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
    public Altia: string,
    public Indra: string
  ) {}
}
