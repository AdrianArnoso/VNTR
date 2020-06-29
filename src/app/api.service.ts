import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path = 'https://localhost:5001/Adrian';
  URL_ACTIVIDADE_EXTERNALIZACION ="https://localhost:5001/postActividadExternalizacion";

  constructor(private http: HttpClient) { }

  getServicios$() {
    return this.http.get<any[]>(this.path).pipe(map(data => (data ? data : [])));
  }
  postActividadExternalizacion(datos){
    console.log(datos);
    const url = this.URL_ACTIVIDADE_EXTERNALIZACION;
    return this.http.post<any>(url,datos);  
  }


}
