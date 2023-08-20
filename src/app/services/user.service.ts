import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'users';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})


export class UserService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5000/users';

  setUser(data: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, data, HttpOptions);
  }
}
