import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-axa',
  templateUrl: './form-axa.component.html',
  styleUrls: ['./form-axa.component.scss'],
})
export class FormAxaComponent implements OnInit {
  isSelected: boolean = true;
  male = new FormControl();
  female = new FormControl();
  monthly_Income = new FormControl('', [Validators.required]);
  monthly_Pay = new FormControl('', [Validators.required]);
  name = 'World';

  isAsset: boolean = false; //สะสมทรัพย์
  isRetire: boolean = false; // เกษียณอายุ
  isPest: boolean = false; // โรคร้าย
  isHealth: boolean = false; //สุขภาพ
  policyType:FormControl = new FormControl();
  togglePolicy(event:Event){
    let value:string = (event.target as HTMLInputElement).value;
    this.isAsset = value === '1';
    this.isRetire =  value === '2';
    this.isPest =  value === '3';
    this.isHealth =  value === '4';
    
  }

  years = [
    { value: 1, label: '7-15 ปี' },
    { value: 2, label: '16-25 ปี' },
    { value: 3, label: '35-45 ปี' },
    { value: 4, label: '45-55 ปี' },
    { value: 5, label: '65 ปีขึ้นไป' },
  ];

  public genderType: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
