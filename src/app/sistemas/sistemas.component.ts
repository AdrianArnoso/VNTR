import { Component, OnInit, ViewChild,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TareasService } from '../tareas.service';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'abanca-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.scss']
})
export class SistemasComponent implements OnInit {
  columnas: string[] = ['id','sistemaInformacion','criticidad','borrar'];

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  rol: boolean;

  dataSource: MatTableDataSource<Sistema>;
  datos$ : any = this.apiService.getSistemas$().then(data =>{
    this.dataSource = new MatTableDataSource<Sistema>(data);
    console.log(data);
    console.log(data[1].sistemaInformacion);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;}
  );

  actSistemasSearch = this.fb.group({
    id_sistema: [null, [Validators.required]],
    name_sistema: [null, [Validators.required]],
    criticidad_sistema: [null, [Validators.required]]
    });

    SearchExternalizacion(){
      console.log(this.actSistemasSearch.value);
      return this.apiService.getSistemasSearch$(this.actSistemasSearch.value).subscribe;
    }
    onReset(){
      this.actSistemasSearch.reset();
      // <console.log("www")>
    }
    

  /*[
    {id: 'SI00001', sistemaInformacion: 'Sistema de información patrimonial', criticidad: 'No'},
    {id: 'SI00002', sistemaInformacion: 'Sistema de información CRM operativo', criticidad: 'No'},
    {id: 'SI00003', sistemaInformacion: 'Sistema de información CRM analítico', criticidad: 'No'},
    {id: 'SI00004', sistemaInformacion: 'Sistema de información de comunicación al empleado', criticidad: 'No'},
    {id: 'SI00005', sistemaInformacion: 'Sistema de información de mensajería y colaboración', criticidad: 'No'},
    {id: 'SI00006', sistemaInformacion: 'Sistema de información de gestión operativa', criticidad: 'No'},
  ];
*/
  constructor(private apiService: ApiService,tareasService: TareasService,private fb: FormBuilder,) { 
    this.rol = tareasService.getRol();
  }

  
  
  
  ngOnInit() {
   
  }

}

export class Sistema {
  constructor(public id: string, public sistemaInformacion: string, public criticidad: string){


  }
}
