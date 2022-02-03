import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { InsuranceService } from 'src/app/services/insurance.service';
@Component({
  selector: 'app-wlanp85',
  templateUrl: './wlanp85.component.html',
  styleUrls: ['./wlanp85.component.scss'],
})
export class WLANP85Component implements OnInit {
  insurances: any[] = [];
  constructor(private insuranceService: InsuranceService) {}

  id: any = 'mission';
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id);
  }

  ngOnInit(): void {
    this._fetchInsurance();
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      // duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }
  _fetchInsurance() {
    this.insuranceService.getInsurance().subscribe((result) => {
      console.log(result);
      this.insurances = result;
    });
  }

  getFileName(id: number) {
    const insurance = this.insurances.find(
      (item: any) => item.insurance_id === id
    );
    return insurance?.insurance_file || '';
  }
}
