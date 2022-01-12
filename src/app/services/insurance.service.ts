import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  constructor(private http: HttpClient) {}

  postInsurance(data: any) {
    return this.http.post<any>('/api/insurance/post-insurance', data);
  }

  getInsurance(){
    return this.http.get<any>('/api/insurance/get-insurance');
  }
}
