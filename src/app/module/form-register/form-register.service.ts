import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormRegisterService {
  constructor(private http: HttpClient) {}

  // getProvince(param: any): Observable<any> {
  //   return this.http.get<any>(`https://jubili-api-test.builk.com/api/V1/Address/GetProvince?countryCode'${param.countryCode}&languageCode=${param.languageCode}`);
  // }
}
