import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'abanca-new-sistema',
  templateUrl: './new-sistema.component.html',
  styleUrls: ['./new-sistema.component.scss']
})
export class NewSistemaComponent implements OnInit {
  familias = this.tareasService.getFamilias();

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }

}
