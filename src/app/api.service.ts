import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map ,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActividadExternalizacionInterface } from './Models/ActividadExternalizacion';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path = 'https://localhost:5001/Adrian';
  URL_ACTIVIDADE_EXTERNALIZACION ="https://localhost:5001/Adrian/ActividadExternalizacion";

  constructor(private http: HttpClient) { }

  getServicios$() {
    return this.http.get<any[]>(this.path).pipe(map(data => (data ? data : [])));
  }
  postActividadExternalizacion(datos){
    console.log(datos);
    const url = this.URL_ACTIVIDADE_EXTERNALIZACION;
    //return this.http.post<any>(url,datos);  
    //return this.http.post<ActividadExternalizacionInterface>(url,datos ); 
     const valor = "rrpost"
    return this.http.post<any>(url,valor).pipe(
      catchError(e => throwError(e))
    );
  }

  getSistemas$() {
    return this.http.get<any[]>(this.path + "/sistemas").pipe(map(data => (data ? data : []))).toPromise();
  }

}
