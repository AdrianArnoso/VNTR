import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map ,catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IActividadExternalizacion } from './Models/ActividadExternalizacion';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private path = 'https://localhost:5001/Vntr';
  URL_ACTIVIDADE_EXTERNALIZACION ="https://localhost:5001/Vntr/ActividadExternalizacion";
  
  headers = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  handleError: (err: any, caught: Observable<any>) => never;

  constructor(private http: HttpClient) { }

  getServicios$() {
    return this.http.get<any[]>(this.path).pipe(map(data => (data ? data : [])));
  }
  getServicioById$(id) {
    return this.http
      .get<any>(this.path + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }
  getServicioSearch$(datos){
    const url = this.path +"/servicios/"+
    datos.id+"/"+
    datos.name_servicio+"/"+
    datos.criticidad_servicio+"/"+
    datos.responsable+"/"+
    datos.negocio;
    console.log(url);
    return this.http.get(url);

  }
  DeleteServicios$(id){
    const url = this.path+"/DeleteServicios/"+id
    console.log(url);
    return this.http.delete<any>(url);
  }

  postActividadExternalizacion$(datos: IActividadExternalizacion): Observable<IActividadExternalizacion>{
    console.log(datos);
    const url = this.URL_ACTIVIDADE_EXTERNALIZACION;
    //return this.http.post<any>(url,datos);  
    //return this.http.post<ActividadExternalizacionInterface>(url,datos ); 
     
    //return this.http.post<ActividadExternalizacionInterface>(url,datos).pipe(
     // catchError(e => throwError(e)));
     return this.http.post<IActividadExternalizacion>(url,datos);
  }
  
  getExternalizacion$() {
    return this.http.get<any[]>(this.path+ "/externalizaciones").pipe(map(data => (data ? data : [])));
  }

  getSistemas$() {
    return this.http.get<any[]>(this.path + "/sistemas").pipe(map(data => (data ? data : []))).toPromise();
  }
  getSistemasSearch$(datos){
    console.log(datos.id_sistema);
    const url = this.path +"/sistemas/"+datos.id_sistema+"/"+datos.name_sistema+"/"+datos.criticidad_sistema+"/"+datos.responsable_sistema;
    console.log(url);
    return this.http.get<any>(url);
  }
  

  getSistemaById$(id) {
    if(!isUndefined(id))
      return this.http.get<any[]>(this.path + "/sistemas"+"/"+id).pipe(map(data => (data ? data : [])));
    else
      return new Observable<any[]>((observer) => observer.next([{id:"",sistemaInformacion:"",criticidad:""}]));
  }
  DeleteSistemas$(id){
    const url = this.path+"/DeleteSistemas/"+id
    console.log(url);
    return this.http.delete<any>(url);
  }

}
