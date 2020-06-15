import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../tareas.service';

@Component({
  selector: 'abanca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  value:boolean;

  constructor(private tareasService: TareasService) { 
    this.value = tareasService.getRol();

  }

  onChange(){
    this.tareasService.setRol();
  }

  ngOnInit() {
    
  }

}
