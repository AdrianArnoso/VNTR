import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map ,catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IActividadExternalizacion } from './Models/ActividadExternalizacion';

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
    const url = this.path +"/servicios/"+datos.id;
    return this.http.get(url);

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

  getSistemas$() {
    return this.http.get<any[]>(this.path + "/sistemas").pipe(map(data => (data ? data : []))).toPromise();
  }
  getSistemasSearch$(datos){
    console.log(datos.id_sistema);
    const url = this.path +"/sistemas/"+datos.id_sistema;
    console.log(url);
    return this.http.get<any>(url);
  }
  

  getSistemaById$(id) {
    console.log(id);
    return this.http.get<any[]>(this.path + "/sistemas"+"/"+id).pipe(map(data => (data ? data : []))).toPromise();
  }

}
