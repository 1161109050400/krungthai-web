import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  mailTo(data: {
    user_firstname: string;
    user_lastname: string;
    user_fax: string;
    user_county: string;
    user_email:string;
    user_phone:string;
  }) {
    return this.http.post('/api/user/send-email', data);
  }
}
