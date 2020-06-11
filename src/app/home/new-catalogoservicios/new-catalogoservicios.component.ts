import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'abanca-new-catalogoservicios',
  templateUrl: './new-catalogoservicios.component.html',
  styleUrls: ['./new-catalogoservicios.component.scss']
})
export class NewCatalogoserviciosComponent implements OnInit {
  negocios = this.tareasService.getNegocios();


  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }

}
