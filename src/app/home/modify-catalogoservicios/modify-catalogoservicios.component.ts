import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'abanca-modify-catalogoservicios',
  templateUrl: './modify-catalogoservicios.component.html',
  styleUrls: ['./modify-catalogoservicios.component.scss']
})
export class ModifyCatalogoserviciosComponent implements OnInit {
  negocios = this.tareasService.getNegocios();
  responsables = this.tareasService.getResponsables();
  serviceById$: Observable<any[]>;
  


  constructor(private tareasService: TareasService, activatedRoute: ActivatedRoute, api:ApiService) {

    const serviceId = activatedRoute.snapshot.params.id;
    console.log("value: " + serviceId);
    this.serviceById$ = api.getServicioById$(serviceId);
   }

  ngOnInit() {
    
  }
}
