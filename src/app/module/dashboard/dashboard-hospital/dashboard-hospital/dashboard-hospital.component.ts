import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  // latitude = new FormControl('', [Validators.required]);
  // longitude = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  hospital_id: number | null = null;
  @ViewChild('closeModal') closeModal!: ElementRef;
  constructor(
    private http: HttpClient,
    private hospitalService: HospitalService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.hospitalService
      .Hospital(
        this.hospitalName.value,
        this.hospitalLocation.value,
        // this.latitude.value,
        // this.longitude.value,
        this.phone.value
      )
      .subscribe(
        (result) => {
          this.toastr.success('บันทึกข้อมูลสำเร็จ','แจ้งเตือน');
          // alert('Data added successfully !');
          this.getHospital();
          this.closeModal.nativeElement.click();
        },
        (err) => {
          if (err.status === 400) {
            // alert('มีข้อมูลเครือข่ายพยาบาลนี้อยู่แล้ว?');
            this.toastr.warning('มีข้อมูลเครือข่ายพยาบาลนี้อยู่แล้ว','แจ้งเตือน');
          }
        }
      );
  }
  setCreateModal() {
    this.hospital_id = null;
    this.hospitalName.setValue(' ');
  }

  setEditModal(id: number) {
    this.hospital_id = id;
    this.hospitalService.getHospitalById(id).subscribe((result) => {
      // console.log(result);
      this.hospitalName.setValue(result.hospital_name);
      this.hospitalLocation.setValue(result.hospital_location);
      // this.latitude.setValue(result.hospital_latitude);
      // this.longitude.setValue(result.hospital_longitude);
      this.phone.setValue(result.hospital_phone);
    });
  }

  onUpdate() {
    this.hospitalService.putHospital(
        this.hospitalName.value,
        this.hospitalLocation.value,
        // this.latitude.value,
        // this.longitude.value,
        this.phone.value,
        this.hospital_id
      )
      .subscribe((result) => {
        // alert('Edit successfully !');
        this.toastr.success('แก้ไขข้อมูลสำเร็จ','แจ้งเตือน');
        this.getHospital();
        this.closeModal.nativeElement.click();
      });
  }



  onDelete(id: number) {
    this.hospital_id = id;
    this.hospitalService.deleteHospital(id).subscribe((result) => {
      
      // this.getHospital();
      // this.toastr.success('ลบข้อมูลสำเร็จ','แจ้งเตือน');
    });
  }


  getHospital() {
    this.hospitalService.getHospital().subscribe((Response) => {
      console.log(Response);

      this.hospital = Response;
      console.log(this.hospital);
    });
  }

  ngOnInit(): void {
    this.getHospital();
  }
}
