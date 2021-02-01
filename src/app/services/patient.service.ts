import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://prmsystem-backend-testing.herokuapp.com/patients/addPatients';


const updatePatientUrl = 'https://prmsystem-backend-testing.herokuapp.com/patients/updatePatientRecord';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.post(updatePatientUrl, data);
  }
}
