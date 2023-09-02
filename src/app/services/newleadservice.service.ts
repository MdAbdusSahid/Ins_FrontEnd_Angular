import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../Class/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class NewleadserviceService {

  private url = "http://localhost:3002/newleads"
  constructor(private http: HttpClient) { }
  getAllEmployees(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(`http://localhost:1997/api/v1/emp/all`)
  }
  sendWishToEmployeeWithTodayBirthDay(): Observable<EmployeeDetails> {
    return this.http.post<EmployeeDetails>("http://localhost:1997/api/v1/sendEmail", EmployeeDetails)
  }
  getEmployeeWithBirthDayToday(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(`http://localhost:1997/api/v1/emp/birthDate/today`)
  }

  getnewlead() {
    return this.http.get(this.url)
  }
}
