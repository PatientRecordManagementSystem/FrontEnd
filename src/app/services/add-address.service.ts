import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AddressService {

baseUrl = 'https://prmsystem-backend-testing.herokuapp.com';

  constructor(private http: HttpClient) { }

  create(NewAddress: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/patients/addAddress/`, NewAddress);
  }

  // create(NewAddress: any, id): Observable<any> {
  //   return this.http.post(baseUrl, NewAddress, id);
  // }
}
