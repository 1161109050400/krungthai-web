import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-dashboard-hospital',
  templateUrl: './dashboard-hospital.component.html',
  styleUrls: ['./dashboard-hospital.component.scss'],
})
export class DashboardHospitalComponent implements OnInit {
  hospital: any;

  hospitalName = new FormControl('', [Validators.required]);
  hospitalLocation = new FormControl('', [Validators.required]);
  latitude = new FormControl('', [Validators.required]);
  longitude = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);

  constructor(
    private http: HttpClient,
    private hospitalService: HospitalService,
    private router: Router
  ) {}

  onSubmit() {
    this.hospitalService.Hospital(this.hospitalName.value,this.hospitalLocation.value,this.latitude.value, this.longitude.value,this.phone.value
      )
      .subscribe(
        (result) => {
          alert('Data added successfully !');
        },
        (err) => {
          if (err.status === 400) {
            alert('มีข้อมูลเครือข่ายพยาบาลนี้อยู่แล้ว?');
          }
        }
      );
  }

  onUpdate(){
    this.hospitalService.putSomting(this.hospitalName.value,this.hospitalLocation.value,this.latitude.value, this.longitude.value,this.phone.value).subscribe(
      (result) => {
        alert('Edit successfully !');
      },
    );
  }

  onDelete(){

  }


  getHospital() {
    this.hospitalService.getHospital().subscribe((Response) => {
      this.hospital = Response;
      console.log(this.hospital);
    });
  }

  ngOnInit(): void {
    this.getHospital();
  }
}
