import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from 'src/app/services/insurance.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-insurance',
  templateUrl: './dashboard-insurance.component.html',
  styleUrls: ['./dashboard-insurance.component.scss'],
})
export class DashboardInsuranceComponent implements OnInit {
  title = 'increment-notification';
  notify = false;
  count = 0;

  onSendClick() {
    this.count++;
    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, 300);
  }

  file: any;
  insurances: any[] = [];
  totalLength: any;
  page: number = 1;
  showpost: any = [];

  filterDocument!: string;

  @ViewChild('closeModal') closeModal!: ElementRef;

  form = new FormGroup({
    insurance_name: new FormControl(null, Validators.required),
    insurance_file: new FormControl(null, Validators.required),
    type_insurance_id: new FormControl(null, Validators.required),

    // file: new FormControl('', Validators.required)
  });
  hospital_id: number | null = null;
  insurance_id: number | null = null;
  progress: number = 0;

  onSelectType(data: any) {
    if (data) {
      console.log(data.value);
    }
  }

  typeInsurance = [
    { value: '3', label: 'สะสมทรัพย์' },
    { value: '4', label: 'เกษียณอายุ' },
    { value: '1', label: 'โรคร้ายแรง' },
    { value: '2', label: 'สุขภาพ' },
  ];

  //ค่าประเภท
  getTypeOfInsurance(id: any) {
    return this.typeInsurance.find((item: any) => item.value == id)?.label;
  }

  constructor(
    private insuranceService: InsuranceService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this._fetchInsurance();
    this.insuranceService.getInsurance().subscribe((result) => {
      this.showpost = result;
      this.totalLength = result.length;
      console.log(this.showpost);
    });
  }
  _fetchInsurance() {
    this.insuranceService.getInsurance().subscribe((result) => {
      console.log(result);
      this.insurances = result;
    });
  }

  _beforeSave() {
    const formData = new FormData();
    formData.append(
      'type_insurance_id',
      this.form.controls.type_insurance_id.value
    );
    formData.append('insurance_file', this.file);
    formData.append('insurance_name', this.form.controls.insurance_name.value);

    this.insuranceService.postInsurance(formData).subscribe(
      (result) => {
        console.log(result);
        // alert('Uploaded Successfully.');
        this.toastr.success('เพิ่มข้อมูลเรียบร้อยแล้ว', 'แจ้งเตือน');
        // this._fetchInsurance();
        this.closeModal.nativeElement.click();
      },
      (err) => {
        if (err.status === 400) {
          // alert('มีข้อมูลเครือข่ายพยาบาลนี้อยู่แล้ว?');
          this.toastr.warning('มีข้อมูลแผนประกันนี้อยู่แล้ว', 'แจ้งเตือน');
        }
      }
    );
    window.location.reload();
  }

  setCreateModal() {
    this.insurance_id = null;
    this.form.controls.insurance_file.setValue('');
    this.form.controls.insurance_name.setValue('');
    this.form.controls.type_insurance_id.setValue('');
  }

  setDeleteModal(id: number) {
    this.insurance_id = id;
  }
  setEditModal(id: number) {
    this.insurance_id = id;
    this.insuranceService.getInsuranceById(id).subscribe((result) => {
      console.log(result);
      this.form.controls.insurance_name.setValue(result.insurance_name);
      this.form.controls.type_insurance_id.setValue(result.type_insurance_id);
      this.form.controls.insurance_file.setValue(result.insurance_file);
    });
  }

  onDelete() {
    this.insuranceService
      .deleteInsurance(this.insurance_id)
      .subscribe((result) => {
        this.toastr.success('ลบข้อมูลสำเร็จ', 'แจ้งเตือน');
        // this.getHospital();
      });
    // window.location.reload();
  }


  onUpdate() {
    this.insuranceService
      .putInsurance(
        this.insurance_id,
        this.form.controls.insurance_name.value,
        this.form.controls.insurance_file.value,
        this.form.controls.type_insurance_id.value
      )
      .subscribe((result) => {
        this.toastr.success('แก้ไขข้อมูลสำเร็จ', 'แจ้งเตือน');
        this._fetchInsurance();
        // this.closeModal.nativeElement.click();
      });
    window.location.reload();
  }

  _setFile(event: Event) {
    this.file = (event.target as any).files[0];
  }

  downloadFile(file: any) {}

  logout() {
    this.authService.logout();
    window.location.reload();
  }


}
