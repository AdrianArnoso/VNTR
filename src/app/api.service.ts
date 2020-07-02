import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map ,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActividadExternalizacionInterface } from './Models/ActividadExternalizacion';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private path = 'https://localhost:5001/Vntr';
  URL_ACTIVIDADE_EXTERNALIZACION ="https://localhost:5001/Vntr/ActividadExternalizacion";
  private valor = "kkkk"

  constructor(private http: HttpClient) { }

  getServicios$() {
    return this.http.get<any[]>(this.path).pipe(map(data => (data ? data : [])));
  }
  getServicioById$(id) {
    return this.http
      .get<any>(this.path + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }

  postActividadExternalizacion(datos){
    console.log(datos);
    const url = this.URL_ACTIVIDADE_EXTERNALIZACION;
    //return this.http.post<any>(url,datos);  
    //return this.http.post<ActividadExternalizacionInterface>(url,datos ); 
     
    return this.http.post<any>(url,this.valor).pipe(
      catchError(e => throwError(e))
    );
  }

  getSistemas$() {
    return this.http.get<any[]>(this.path + "/sistemas").pipe(map(data => (data ? data : []))).toPromise();
  }

}
