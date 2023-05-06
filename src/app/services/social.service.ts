import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Social } from 'src/models/Social';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Social[]> {
    return this.http.get<Social[]>(`${environment.baseApiUrl}api/Social/Get`);
  }
}
