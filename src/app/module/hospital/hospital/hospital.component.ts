import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
})
export class HospitalComponent implements OnInit {
  constructor(private hospitalService: HospitalService) {}
  hospital: any;
  filterHospital!: string;

  totalLength: any;
  page: number = 1;
  showpost: any = [];

  getHospital() {
    this.hospitalService.getHospital().subscribe((Response) => {
      this.hospital = Response;
    });
  }

  ngOnInit(): void {
    this.getHospital();
    this.hospitalService.getHospital().subscribe((result) => {
      this.showpost = result;
      this.totalLength = result.length;
    });
  }
}
