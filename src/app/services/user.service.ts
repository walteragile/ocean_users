import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const headers = new HttpHeaders({ 'app-id': environment.apiHeader });
    return this.http.get(`${environment.api}/user?limit=10`, { headers }).pipe(
      map((x: any) => x.data)
    );
  }

  getUserById(id: string): Observable<any> {
    const headers = new HttpHeaders({ 'app-id': environment.apiHeader });
    return this.http.get(`${environment.api}/user/${id}`, { headers });
  }
}