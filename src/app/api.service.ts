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
  private value = "kkkk"
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

  postActividadExternalizacion(datos: IActividadExternalizacion): Observable<IActividadExternalizacion>{
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

}
