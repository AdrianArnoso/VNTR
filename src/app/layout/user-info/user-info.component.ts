import { Component, OnInit } from '@angular/core';
import { ContextoUsuario } from '@morphe/seguridad';


@Component({
  selector: 'abanca-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private contexto: ContextoUsuario) { }

  getUser() {
    if (this.contexto.isAuthenticated()) {
      return this.contexto.getUsuarioActual().getNombre();
    }
  }

  getId() {
    if (this.contexto.isAuthenticated()) {
      return this.contexto
        .getUsuarioActual()
        .getId()
        .split('\\')[1];
    }
  }

  ngOnInit() {
  }

}
