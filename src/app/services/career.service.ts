import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from 'src/models/Career';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Career[]> {
    return this.http.get<Career[]>(`${environment.baseApiUrl}api/Career/Get`);
  }
}
