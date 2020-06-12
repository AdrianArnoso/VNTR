import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'abanca-new-actividadexternalizacion',
  templateUrl: './new-actividadexternalizacion.component.html',
  styleUrls: ['./new-actividadexternalizacion.component.scss']
})
export class NewActividadexternalizacionComponent implements OnInit {
  empresas = this.tareasService.getEmpresasExternalizadas();


  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }

}
