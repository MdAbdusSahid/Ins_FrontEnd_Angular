import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../Class/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  employeeData: EmployeeDetails


  constructor() { }
  setData(data) {
    this.employeeData = data;
  }
  getData() {
    return this.employeeData;
  }
}
