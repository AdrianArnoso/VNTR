import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  rol: boolean = false;

  setRol(){
    this.rol = !this.rol;
  }

  getRol(){
    return this.rol;
  }

  getNegocios() {
    return [
      { id: 0, name: 'ABANCA España' },
      { id: 1, name: 'ABANCA Portugal' },
      { id: 2, name: 'ABANCA Suiza' },
      { id: 3, name: 'ABANCA USA'},
      { id: 4, name: 'ASF España' },
      { id: 5, name: 'ASF Porugal'},
    ];
  }

  getResponsables() {
    return [
      { id: 0, name: 'Arnoso' },
      { id: 1, name: 'Quijano' },
      { id: 2, name: 'Fraga' },
    ];
  }

  getEmpresasExternalizadas() {
    return [
      { id: 0, name: 'ALAMO' },
      { id: 1, name: 'ALTIA' },
      { id: 2, name: 'BT' },
      { id: 3, name: 'EMETEL'},
      { id: 4, name: 'INDRA' },
      { id: 5, name: 'PLEXUS'},
      { id: 6, name: 'PROSERGUR' },
      { id: 7, name: 'SIVSA' },
      { id: 8, name: 'SOFTTEK' },
      { id: 9, name: 'KPMG'},
      { id: 10, name: 'DELOITTE' },
      { id: 11, name: 'BAHIA'},
      { id: 12, name: 'INDRA'},
    ];
  }

  getFamilias() {
    return [
      { id: 0, name: 'Asesoramiento comercial a clientes en productos de inversión' },
      { id: 1, name: 'Avales' },
      { id: 2, name: 'Banca Electrónica' },
      { id: 3, name: 'COMEX'},
      { id: 4, name: 'Confirming' },
      { id: 5, name: 'Créditos'},
      { id: 6, name: 'Descuento' },
      { id: 7, name: 'Domiciliaciones' },
      { id: 8, name: 'Factoring' },
      { id: 9, name: 'Financiación Especial'},
      { id: 10, name: 'Fondos de Inversión' },
      { id: 11, name: 'Leasing'},
      { id: 12, name: 'Medios de Pago'},
      { id: 13, name: 'Mercado de Capitales' },
      { id: 14, name: 'Multifinanciación' },
      { id: 15, name: 'Oficinas de Representación' },
      { id: 16, name: 'Pasivo'},
      { id: 17, name: 'Planes de Pensiones' },
      { id: 18, name: 'Préstamos'},
      { id: 19, name: 'Renting' },
      { id: 20, name: 'Seguros-Personas' },
      { id: 21, name: 'Seguros-Todos' },
      { id: 22, name: 'Valores'},
      { id: 23, name: 'Banca Digital' },
      { id: 24, name: 'Clientes'},
      { id: 25, name: 'Colaboradores'},
      { id: 26, name: 'Financiación en punto de venta'},
    ];
  }

}
