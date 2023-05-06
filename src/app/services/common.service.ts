import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Common } from 'src/models/Common';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Common[]> {
    return this.http.get<Common[]>(`${environment.baseApiUrl}api/Common/Get`);
  }

  getById(id: number = 1): Observable<Common> {
    return this.http.get<Common>(`${environment.baseApiUrl}api/Common/GetById?id=${id}`);
  }
}
