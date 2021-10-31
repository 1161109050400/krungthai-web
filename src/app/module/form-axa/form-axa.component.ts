import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-axa',
  templateUrl: './form-axa.component.html',
  styleUrls: ['./form-axa.component.scss'],
})
export class FormAxaComponent implements OnInit {



  isSelected: boolean = true; 
  
  years = [
    { value: 1, label: '7-15 ปี' },
    { value: 2, label: '16-25 ปี' },
    { value: 3, label: '35-45 ปี' },
    { value: 4, label: '45-55 ปี' },
    { value: 5, label: '65 ปีขึ้นไป' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
