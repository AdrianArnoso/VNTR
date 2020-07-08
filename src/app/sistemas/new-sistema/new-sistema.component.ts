import { Component, OnInit, Input } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { isUndefined } from 'util';
import { Observable } from 'rxjs';

@Component({
  selector: 'abanca-new-sistema',
  templateUrl: './new-sistema.component.html',
  styleUrls: ['./new-sistema.component.scss']
})
export class NewSistemaComponent implements OnInit {
  familias = this.tareasService.getFamilias();
  sistema$: Observable<any[]>;


  constructor(private tareasService: TareasService, route: ActivatedRoute,apiService: ApiService) { 
    
    this.familias = tareasService.getFamilias();
    let id = route.snapshot.params.id; 
    this.sistema$ = apiService.getSistemaById$(id);
  }

  ngOnInit() {
  }

}
