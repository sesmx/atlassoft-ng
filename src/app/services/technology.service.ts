import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from 'src/models/Technology';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${environment.baseApiUrl}api/Technology/Get`);
  }
}
