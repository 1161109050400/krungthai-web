import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-dashboard-insurance',
  templateUrl: './dashboard-insurance.component.html',
  styleUrls: ['./dashboard-insurance.component.scss'],
})
export class DashboardInsuranceComponent implements OnInit {
  file: any;
  insurances: any[] = [];

  form = new FormGroup({
    insurance_name: new FormControl(null, Validators.required),
    insurance_file: new FormControl(null, Validators.required),
    type_insurance_id: new FormControl(null, Validators.required),
  });

  onSelectType(data: any) {
    if (data) {
      console.log(data.value);
    }
  }

  type_insurance_id = [
    { id: '3', name: 'สะสมทรัพย์' },
    { id: '4', name: 'เกษียณอายุ' },
    { id: '1', name: 'โรคร้ายแรง' },
    { id: '2', name: 'สุขภาพ' },
  ];

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    this._fetchInsurance();
  }
  _fetchInsurance() {
    this.insuranceService.getInsurance().subscribe((result) => {
      console.log(result);
      this.insurances = result;
    });
  }
  _beforeSave() {
  
    // const formData = new FormData();
    // formData.append('type_insurance_id', '2');
    // formData.append('insurance_file', this.file);
    // formData.append('insurance_name', 'Test');

    this.insuranceService.postInsurance(this.form.value).subscribe((result) => {
      console.log(result);
    });
  }
  _setFile(event: Event) {
    this.file = (event.target as any).files[0];
  }

  downloadFile(file: any) {}
}
