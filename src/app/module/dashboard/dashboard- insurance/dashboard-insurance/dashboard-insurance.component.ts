import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-insurance',
  templateUrl: './dashboard-insurance.component.html',
  styleUrls: ['./dashboard-insurance.component.scss']
})
export class DashboardInsuranceComponent implements OnInit {



  cars = [
      { id: 0, name: 'สะสมทรัพย์' },
      { id: 1, name: 'เกษียณอายุ' },
      { id: 2, name: 'โรคร้ายแรง' },
      { id: 3, name: 'สุขภาพ' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
