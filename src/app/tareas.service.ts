import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

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

}
