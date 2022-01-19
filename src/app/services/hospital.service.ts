import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {}

  Hospital(
    hospital_name: string,
    hospital_location: string,
    hospital_phone: string
  ) {
    // console.log(user_id);
    return this.http.post('/api/hospital/post-hospital', {
      hospital_name,
      hospital_location,
      hospital_phone,
    });
  }

  getHospital(): Observable<any> {
    let sub = this.http.get('/api/hospital/get-hospital');
    console.log(sub);
    return sub;
  }
  getHospitalById(id: number) {
    return this.http.get<any>('/api/hospital/get-hospital/' + id);
  }
  putHospital(
    hospital_name: string,
    hospital_location: string,
    hospital_phone: string,
    hospital_id: number|null
  ) {
    return this.http.put<any>('/api/hospital/put-hospital/'+hospital_id, {
      hospital_name,
      hospital_location,
      hospital_phone,
    });
  }

  // deleteHospitalById(id: number) {
  //   return this.http.get<any>('/api/hospital/get-hospital/' + id);
  // }

  deleteHospital(id: number|null){
    return this.http.delete<any>('/api/hospital/del-hospital/'+id);
  }

}

