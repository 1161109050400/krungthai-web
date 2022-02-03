import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { HospitalService } from 'src/app/services/hospital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-hospital',
  templateUrl: './dashboard-hospital.component.html',
  styleUrls: ['./dashboard-hospital.component.scss'],
})
export class DashboardHospitalComponent implements OnInit {
  hospital: any;
  hospitalName = new FormControl(null, [Validators.required]);
  hospitalLocation = new FormControl(null, [Validators.required]);
  phone = new FormControl(null, [Validators.required]);
  hospital_id: number | null = null;

  title = 'increment-notification';
  notify = false;
  count = 0;

  totalLength: any;
  page: number = 1;
  showpost: any = [];

  onSendClick() {
    this.count++;
    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, 300);
  }

  @ViewChild('closeModal') closeModalView!: ElementRef;

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

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(result => {
            window.location.reload();
          });

          // this.toastr.success('เพิ่มข้อมูลเรียบร้อยแล้ว', 'แจ้งเตือน');
          // this.getHospital();
          // this.closeModalView.nativeElement.click();
        },
        (err) => {
          if (err.status === 400) {
            this.toastr.warning(
              'มีข้อมูลเครือข่ายพยาบาลนี้อยู่แล้ว',
              'แจ้งเตือน'
            );
          }
        }
      );
  }
  setCreateModal() {
    this.hospital_id = null;
    this.hospitalName.setValue('');
    this.hospitalLocation.setValue('');
    this.phone.setValue('');
  }

  setDeleteModal(id: number) {
    this.hospital_id = id;
  }
  setEditModal(id: number) {
    this.hospital_id = id;
    this.hospitalService.getHospitalById(id).subscribe((result) => {
      this.hospitalName.setValue(result.hospital_name);
      this.hospitalLocation.setValue(result.hospital_location);
      this.phone.setValue(result.hospital_phone);
    });
  }

  onUpdate() {
    this.hospitalService
      .putHospital(
        this.hospitalName.value,
        this.hospitalLocation.value,
        this.phone.value,
        this.hospital_id
      )
      .subscribe((result) => {
        this.toastr.success('แก้ไขข้อมูลสำเร็จ', 'แจ้งเตือน');
      });
    window.location.reload();
  }

  onDelete() {
    this.hospitalService
      .deleteHospital(this.hospital_id)
      .subscribe((result) => {
        this.toastr.success('ลบข้อมูลสำเร็จ', 'แจ้งเตือน');
        // this.getHospital();
      });
    window.location.reload();
  }

  getHospital() {
    this.hospitalService.getHospital().subscribe((Response) => {
      console.log(Response);

      this.hospital = Response;
      console.log(this.hospital);
    });
  }

  closeModalHospital() {
    this.closeModalView.nativeElement.click();
  }

  ngOnInit(): void {
    this.getHospital();
    this.hospitalService.getHospital().subscribe((result) => {
      this.showpost = result;
      this.totalLength = result.length;
    });
  }

  _logOut() {
    this.router.navigate(['/login']);
    // window.location.reload();
  }
}
