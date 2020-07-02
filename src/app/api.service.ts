import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path = 'https://localhost:5001/Vntr';
  URL_ACTIVIDADE_EXTERNALIZACION ="https://localhost:5001/Vntr/postActividadExternalizacion";

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
    return this.http.post<any>(url,datos);  
  }

  getSistemas$() {
    return this.http.get<any[]>(this.path + "/sistemas").pipe(map(data => (data ? data : []))).toPromise();
  }

}
