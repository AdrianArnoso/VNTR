import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path = 'https://localhost:5001/patata';

  constructor(private http: HttpClient) { }

  getPatata$() {
    return this.http.get<any[]>(this.path).pipe(map(data => (data ? data : [])));
  }



}
