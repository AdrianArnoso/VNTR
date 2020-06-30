import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'abanca-modify-catalogoservicios',
  templateUrl: './modify-catalogoservicios.component.html',
  styleUrls: ['./modify-catalogoservicios.component.scss']
})
export class ModifyCatalogoserviciosComponent implements OnInit {
  negocios = this.tareasService.getNegocios();
  responsables = this.tareasService.getResponsables();


  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }
}
