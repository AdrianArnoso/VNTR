import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TareasService } from '../../tareas.service';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';


@Component({
  selector: 'abanca-ver-sistema',
  templateUrl: './ver-sistema.component.html',
  styleUrls: ['./ver-sistema.component.scss']
}) 
export class VerSistemaComponent implements OnInit {
  sistema$: Observable<any[]>;;
  //{id:"Ejemplo ID",sistemaInformacion:"Ejemplo Sistema Información",criticidad:"Ejemplo criticidad"}
  familias: Object;


  constructor(private tareasService: TareasService,private apiService: ApiService,route:ActivatedRoute,     private location: Location
    ) {
    let id = route.snapshot.params.id;
    this.familias = tareasService.getFamilias();
    this.sistema$ = this.apiService.getSistemaById$(id);
    //this.rol = tareasService.getRol();
  }


  ngOnInit() {

  // this.dataSource.sort = this.sort;
  }

  goBack() {
    this.location.back();
  }

}
/*
export class Sistema {
  constructor(public id: string, public sistemaInformacion: string, public criticidad: string){


  }


}
*/
