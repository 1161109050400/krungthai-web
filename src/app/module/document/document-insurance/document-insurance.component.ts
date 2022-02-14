import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-document-insurance',
  templateUrl: './document-insurance.component.html',
  styleUrls: ['./document-insurance.component.scss'],
})
export class DocumentInsuranceComponent implements OnInit {
  constructor(private insuranceService: InsuranceService) {}

  file: any;
  insurances: any[] = [];
  totalLength: any;
  page: number = 1;
  showpost: any = [];

  ngOnInit(): void {
    this._fetchInsurance();
    this.insuranceService.getInsurance().subscribe((result) => {
      this.showpost = result;
      this.totalLength = result.length;
      console.log(this.showpost);
    });
  }

  typeInsurance = [
    { value: '3', label: 'สะสมทรัพย์' },
    { value: '4', label: 'เกษียณอายุ' },
    { value: '1', label: 'โรคร้ายแรง' },
    { value: '2', label: 'สุขภาพ' },
  ];

  _fetchInsurance() {
    this.insuranceService.getInsurance().subscribe((result) => {
      this.insurances = result;
    });
  }

  _setFile(event: Event) {
    this.file = (event.target as any).files[0];
  }

  downloadFile(file: any) {}
}
