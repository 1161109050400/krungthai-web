import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormRegisterService {
  constructor(private http: HttpClient) {}

  UserRegister(
    user_firstname: string,
    user_lastname: string,
    user_email: string,
    user_phone: string,
    user_fax: string,
    user_county: string
  ) {
    // console.log(user_id);
    return this.http.post('/api/user/post-user', {
      user_firstname,
      user_lastname,
      user_email,
      user_phone,
      user_fax,
      user_county,
    }); 
  }
  getUser():Observable<any>{
    let sub = this.http.get('/api/user/get-user');
    console.log(sub);
    return sub
  }
  

}
