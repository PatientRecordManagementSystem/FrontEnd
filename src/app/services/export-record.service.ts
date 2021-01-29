import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter } from '../models/Filter';

const baseUrl = 'http://localhost:8080/patients/export';


@Injectable({
    providedIn: 'root'
})

export class ExportRecordService {
    headers = new HttpHeaders().set('Content-Type', 'blob');
    constructor(private http: HttpClient) { }

    create(data: Filter): Observable<any> {
        return this.http.post(baseUrl, data, {responseType: 'arraybuffer'})
    }
    
}