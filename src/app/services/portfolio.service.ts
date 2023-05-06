import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from 'src/models/Portfolio';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${environment.baseApiUrl}api/Portfolio/Get`);
  }

  getById(id: string | null): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${environment.baseApiUrl}api/Portfolio/GetById?id=${id}`);
  }
}
