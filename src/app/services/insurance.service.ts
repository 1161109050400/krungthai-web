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

  getInsurance() {
    return this.http.get<any>('/api/insurance/get-insurance');
  }

  getInsuranceById(id: number) {
    return this.http.get<any>('/api/insurance/get-insurance/' + id);
  }

  putInsurance(
    insurance_id: number | null,
    insurance_name: string,
    insurance_file: string,
    type_insurance_id: number | null
  ) {
    return this.http.put<any>('/api/insurance/put-insurance/' + insurance_id, {
      insurance_id,
      insurance_name,
      insurance_file,
      type_insurance_id
    });
  }
  deleteInsurance(id: number|null){
    return this.http.delete<any>('/api/insurance/del-insurance/'+id);
  }


  


}
