import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { ResponseApiUser } from './responses/response-api-user';
import { UserById } from '../models/user-by-id';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders().append('app-id', environment.apiHeader);
    console.log(JSON.stringify(headers));
    return this.http.get(`${environment.api}/user?limit=10`, { headers: headers }).pipe(
      map((x: ResponseApiUser) => x.data)
    );
  }

  getUserById(id: string): Observable<UserById> {
    const headers = new HttpHeaders().append('app-id', environment.apiHeader);
    return this.http.get<UserById>(`${environment.api}/user/${id}`, { headers });
  }
}