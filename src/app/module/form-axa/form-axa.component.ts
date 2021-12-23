import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-form-axa',
  templateUrl: './form-axa.component.html',
  styleUrls: ['./form-axa.component.scss'],
})
export class FormAxaComponent implements OnInit {
  isSelected: boolean = true;

  monthly_Pay = new FormControl('', [Validators.required]);
  policyType: FormControl = new FormControl();
  genderSelect = '';

  //ข้อมูลฟอร์ม
  form = new FormGroup({
    gender: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),
    occupation: new FormControl(null, Validators.required),
    insuranceType: new FormControl(null, Validators.required),
    incomeYears: new FormControl(null, Validators.required)
  });

  selectStatus: string = '';

  isAsset: boolean = false; //สะสมทรัพย์
  isRetire: boolean = false; // เกษียณอายุ
  isPest: boolean = false; // โรคร้าย
  isHealth: boolean = false; //สุขภาพ

  public genderType: boolean = true;

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private http: HttpClient
  ) {}
  onSelectYear(data: any) {
    if (data) {
      console.log(data.value);
    }
  }
  onSelectOccupation(data:any){
    if (data) {
      console.log(data.id);
    }
  }
  _submit() {
    //let gender = this.form.controls.gender.value;
    let gender = 'Female';
    if (this.isSelected) {
      gender = 'Male';
    }

    let status = this.form.controls.status.value;
    let year = this.form.controls.year.value;
    let occupation = this.form.controls.occupation.value;
    let insuranceType = this.form.controls.insuranceType.value;
    let incomeYears = this.form.controls.incomeYears.value;

    console.log(gender);
    console.log(status);
    console.log(year);
    console.log(occupation);
    console.log(insuranceType);
    console.log(incomeYears);

    const token ='TYymL24bz64tD3DEv+5IYkErT73Tra/1f5OUPh8sbHRcb4FifuYEATmVAoMPPe7tOfTIvCaylHymZkGn1Mb91Q==';
    const url ='/workspaces/e0045c04c9aa48d6bc2855f45f63f067/services/34c0f9c51e0d45618378b41118e53682/execute?api-version=2.0&details=true';
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    const payload = {
      "Inputs": {
        "input1": {
          "ColumnNames": [
            "Gender",
            "Age",
            "Status",
            "Occupation",
            "Income(Y)",
            "Result",
            "Insurance_id"
          ],
          "Values": [
            [
              gender,
              year,
              status,
              occupation,
              incomeYears,
              insuranceType,
              "value"
            ]
          ]
        }
      },
      "GlobalParameters": {}
    };
    
    console.log(payload);
    this.http.post(url, payload, header).subscribe((res: any) => {
      if(res){
        console.log(res);
        let value = res.Results.output1.value.Values[0];
        let value2 = value[value.length-1]; //ผลลัพภ์แผนประกัน
        this.spinner.show();

        setTimeout(() => {
      /** spinner ends after 5 seconds */
        this.spinner.hide();
        }, 3000);
        if("PWLNP85" == value2 ){
          this.router.navigate(['krungthai/wlanp85']);
        }else if("PWLNP95" == value2 ){
          this.router.navigate(['krungthai/wlanp95']);
        }
        
      }else{
        console.log("no data");
      }    
    });

    // console.log(this.genderSelect);
  }
  ngOnInit() {
    
    AOS.init({
      offset: 700, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      // duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }

  toggleStatus(event: any) {
    this.selectStatus = event.target.value;
  }

  togglePolicy(event: Event) {
    let value: string = (event.target as HTMLInputElement).value;
    this.isAsset = value === '1';
    this.isRetire = value === '2';
    this.isPest = value === '3';
    this.isHealth = value === '4';
  }

  years = [
    { value: '1-12', label: '1 เดือน - 12 ปี' },
    { value: '13-24', label: '13 - 24 ปี' },
    { value: '25-36', label: '25 - 36 ปี' },
    { value: '37-48', label: '37 - 48 ปี' },
    { value: '<=49', label: '49 ปีขึ้นไป' },
  ];

  occupation = [
    {
      id: 'Part 1',
      text: 'ส่วนที่ 1',
      icon: 'fas fa-id-card-alt first',
      imageSrc: '',
    },
    {
      id: 'Part 2',
      text: `ส่วนที่ 2`,
      icon: 'fas fa-id-card-alt second',
      imageSrc: '',
    },
    {
      id: 'Part 3',
      text: `ส่วนที่ 3`,
      icon: 'fas fa-id-card-alt third',
      imageSrc: '',
    },
  ];
}
