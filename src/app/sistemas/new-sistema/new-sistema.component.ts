import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'abanca-new-sistema',
  templateUrl: './new-sistema.component.html',
  styleUrls: ['./new-sistema.component.scss']
})
export class NewSistemaComponent implements OnInit {
  familias = this.tareasService.getFamilias();
  sistema;

  constructor(private tareasService: TareasService, route: ActivatedRoute,apiService: ApiService) { 
    let id = route.snapshot.params.id;
    this.familias = tareasService.getFamilias();
    apiService.getSistemaById$(id).then(datos =>{
      this.sistema = datos;
    });
  }

  ngOnInit() {
  }

}
