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
      { id: 5, name: 'ASF Portugal'},
    ];
  }

  getResponsables() {
    return [
      { id: 0, name: 'Arnoso' },
      { id: 1, name: 'Quijano' },
      { id: 2, name: 'Fraga' },
      { id: 3, name: 'Prego' },
      { id: 4, name: 'Regueira' },
      { id: 5, name: 'Pais' },
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
    ];
  }

  getFamilias() {
    return [
      { id: 0, name: 'Asesoramiento comercial a clientes en productos de inversión',checked:false},
      { id: 1, name: 'Avales',checked:true },
      { id: 2, name: 'Banca Electrónica',checked:true },
      { id: 3, name: 'COMEX',checked:false},
      { id: 4, name: 'Confirming' ,checked:false},
      { id: 5, name: 'Créditos',checked:false},
      { id: 6, name: 'Descuento' ,checked:false},
      { id: 7, name: 'Domiciliaciones' ,checked:true},
      { id: 8, name: 'Factoring' ,checked:true},
      { id: 9, name: 'Financiación Especial',checked:false},
      { id: 10, name: 'Fondos de Inversión' ,checked:true},
      { id: 11, name: 'Leasing',checked:false},
      { id: 12, name: 'Medios de Pago',checked:true},
      { id: 13, name: 'Mercado de Capitales' ,checked:true},
      { id: 14, name: 'Multifinanciación' ,checked:false},
      { id: 15, name: 'Oficinas de Representación' ,checked:false},
      { id: 16, name: 'Pasivo',checked:false},
      { id: 17, name: 'Planes de Pensiones' ,checked:true},
      { id: 18, name: 'Préstamos',checked:true},
      { id: 19, name: 'Renting' ,checked:false},
      { id: 20, name: 'Seguros-Personas' ,checked:false},
      { id: 21, name: 'Seguros-Todos' ,checked:true},
      { id: 22, name: 'Valores',checked:true},
      { id: 23, name: 'Banca Digital' ,checked:false},
      { id: 24, name: 'Clientes',checked:false},
      { id: 25, name: 'Colaboradores',checked:false},
      { id: 26, name: 'Financiación en punto de venta',checked:true},
    ];
  }

  getExternalizacion(){
    return [
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[false,false,true,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST02",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST03",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST04",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST05",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST06",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST07",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,false,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST08",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,true,false,true,false,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,true,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[false,false,false,false,true,true,false,false,true,false,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo de nuevas soluciones",
        Externalizacion: "SI",
        Criticidad: "B",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,false,false]
      },
      {
        // Se: "0",
        Id_Actividad: "ST01",
        Descripcion: "Servicios de desarrollo derivados de cambios",
        Externalizacion: "SI",
        Criticidad: "A",
        Empresas:[true,false,false,false,true,true,false,false,true,true,true,true,true]
      },
    ];
  }

}
