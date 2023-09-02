import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExpiredserviceService {

  private url="http://localhost:3003/expired"
  constructor(private http:HttpClient) { }

  getexpired()
  {
    return this.http.get(this.url);
  }
}
