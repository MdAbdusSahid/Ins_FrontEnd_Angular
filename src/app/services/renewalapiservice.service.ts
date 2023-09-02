import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RenewalapiserviceService {

  private url1="http://localhost:3001/renewaldata"
  constructor(private http: HttpClient) { }

  getrenewaldata()
  {
    return this.http.get<any>(this.url1);
  }


}
