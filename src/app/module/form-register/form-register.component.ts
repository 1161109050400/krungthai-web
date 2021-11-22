import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Data } from '@angular/router';
// import { FormRegisterService } from './form-register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  provinces: any;

  // onSubmit: boolean = false;
  // isEmail: boolean = true;
  // isPhone: boolean = true;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  numberPhone = new FormControl('', [Validators.required]);
  dataSelect!:string;
  
  
  dataList: Data[] = [];

  Onsubmit() {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces'
      )
      .subscribe((response) => {
        this.dataList = response.data;
      });

    function formatEmail(f: FormControl) {
      if (f.value == null || f.value == '') {
        return null;
      }
      const EMAIL_REGEXP =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return EMAIL_REGEXP.test(f.value)
        ? null
        : {
            validateEmail: {
              valid: false,
            },
          };
    }
  }
}
