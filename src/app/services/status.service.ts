import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  base = "https://prms-testing-2-backend.herokuapp.com/"

  constructor(private http: HttpClient) { }

  updateStatus(data: any, id): Observable<any> {
    return this.http.put(`${this.base}/patients/update/`+id,data);
  }
  

}
