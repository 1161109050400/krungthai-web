import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../../environments/environment';
import { Request } from '../interface/request';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('/api/auth/login', {
      email,
      password,
    });
  }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.clear();
  }
  getProfile() {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'profile', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }),
      })
      .pipe(
        catchError((err) => {
          return new Observable((res) => {
            const reqData = {
              message: err.statusText,
              status: err.status,
            };
            res.next(reqData);
          });
        })
      );
  }
}
