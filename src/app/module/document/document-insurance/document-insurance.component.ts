import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-insurance',
  templateUrl: './document-insurance.component.html',
  styleUrls: ['./document-insurance.component.scss']
})
export class DocumentInsuranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  years = [
    { value: '1-12', label: '1 เดือน - 12 ปี' },
    { value: '13-24', label: '13 - 24 ปี' },
    { value: '25-36', label: '25 - 36 ปี' },
    { value: '37-48', label: '37 - 48 ปี' },
    { value: '<=49', label: '49 ปีขึ้นไป' },
  ];


}
