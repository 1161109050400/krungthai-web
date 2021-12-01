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
    hospital_latitude: string,
    hospital_longitude: string,
    hospital_phone: string
  ) {
    // console.log(user_id);
    return this.http.post('/api/hospital/post-hospital', {
      hospital_name,
      hospital_location,
      hospital_latitude,
      hospital_longitude,
      hospital_phone,
    });
  }

  getHospital(): Observable<any> {
    let sub = this.http.get('/api/hospital/get-hospital');
    console.log(sub);
    return sub;
  }
  putSomting(
    hospital_name: string,
    hospital_location: string,
    hospital_latitude: string,
    hospital_longitude: string,
    hospital_phone: string
  ) {
    return this.http.put<any>('/api/hospital/put-hospital/6', {
      hospital_name,
      hospital_location,
      hospital_latitude,
      hospital_longitude,
      hospital_phone,
    });
  }
  // console.log(user_id);
}



// updateHospital():Observable<any>{
//   return this.http.put('/api/hospital/put-hospital'){

//   }
// }
