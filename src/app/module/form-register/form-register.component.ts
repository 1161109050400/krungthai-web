import { Component, OnInit } from '@angular/core';
// import { FormRegisterService } from './form-register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  constructor() { }

  provinces:any;

  ngOnInit(): void {
    // var params = {
    //   countryCode: 'TH' ,
    //   languageCode: 'th-TH'
    // };
    // this.service.getProvince(params).subscribe(data=>{
    //   this.provinces = data;
    // });
  }

}
