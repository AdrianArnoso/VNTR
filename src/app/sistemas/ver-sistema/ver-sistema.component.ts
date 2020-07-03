import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TareasService } from '../../tareas.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'abanca-ver-sistema',
  templateUrl: './ver-sistema.component.html',
  styleUrls: ['./ver-sistema.component.scss']
})
export class VerSistemaComponent implements OnInit {
  sistema;
  //{id:"Ejemplo ID",sistemaInformacion:"Ejemplo Sistema Información",criticidad:"Ejemplo criticidad"}
  familias: Object;

  constructor(private tareasService: TareasService,private apiService: ApiService) { 
    this.familias = tareasService.getFamilias();
    this.apiService.getSistemaById$().then(datos =>{
      this.sistema = datos[0];
      console.log(datos[0].sistemaInformacion);
    });
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