import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../Class/EmployeeDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewleadformServiceService {

  private url = "http://localhost:3002/newleadsform"

  constructor(private http: HttpClient) { }
  saveEmployee(emp: EmployeeDetails): Observable<EmployeeDetails> {
    return this.http.post<EmployeeDetails>("http://localhost:1997/api/v1/emp/save", emp);
  }
}

