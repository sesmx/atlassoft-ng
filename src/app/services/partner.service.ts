import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from 'src/models/Partner';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${environment.baseApiUrl}api/Partner/Get`);
  }
}
