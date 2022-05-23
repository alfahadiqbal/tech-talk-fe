import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri: string = 'http://localhost:4000/api'
  constructor(private http: HttpClient) { }

  createEmployee(data: Employee): Observable<any> {
    let url = `${this.baseUri}/create`
    console.log("url", url)
    return this.http.post(url , data)  
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUri)  
  }

  deleteEmployee(id: string) : Observable<any> {
    let url = `${this.baseUri}/delete/${id}`
    return this.http.delete(url)
  }
}
