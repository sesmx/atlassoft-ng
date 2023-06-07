import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from 'src/models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.baseApiUrl}api/Blog/Get`);
  }

  getById(id: string | null): Observable<Blog> {
    return this.http.get<Blog>(`${environment.baseApiUrl}api/Blog/GetById?id=${id}`);
  }
}
