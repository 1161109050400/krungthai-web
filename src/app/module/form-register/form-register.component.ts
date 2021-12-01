import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Data, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormRegisterService } from 'src/app/services/form-register.service';
// import { FormRegisterService } from './form-register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  user: any;
  constructor(
    private formRegisterService: FormRegisterService,
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    // this.registerForm = this.formBuilder.group({
    //   firstName : [null, Validators.required],
    //   lastName : [null, Validators.required],
    //   Email : [null, Validators.required],
    //   numberPhone : [null, Validators.required],
    //   faxNumber : [null, Validators.required],
    //   Province : [null, Validators.required],
    // })
  }
  @ViewChild('saveModal') public saveModal: any; // เรียก Modal login
  provinces: any;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  numberPhone = new FormControl('', [Validators.required]);
  faxNumber = new FormControl();
  Province = new FormControl();

  dataSelect=new FormControl();

  // registerForm:FormGroup;


  dataList: Data[] = [];

  submitsResgister() {
    this.formRegisterService.UserRegister(this.firstName.value,this.lastName.value,this.Email.value,this.numberPhone.value,this.faxNumber.value,this.dataSelect.value).subscribe((result) => {
        if (Response) {
          this.modalService.open(this.saveModal, { centered: true });
          // this.login.open();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        // this.router.navigate(['krungthai/home-page']);
        // alert('Data added successfully !');
      },(err)=>{
        if(err.status===400){
          alert('มีชื่อผู้ใช้นี้แล้ว?')
        }
        
      });


    this.formRegisterService.getUser().subscribe((Response) => {
      this.user = Response;

      console.log(this.user);
      this.user[0].user_firstname;
    });
  }

  // onSubmit(): any{
  //   this.formRegisterService.UserRegister(this.registerForm).subscribe(()=>{
  //     console.log("Data added successfully ! ");
  //   })

  // }

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces'
      )
      .subscribe((response) => {
        this.dataList = response.data;
      });

    // function formatEmail(f: FormControl) {
    //   if (f.value == null || f.value == '') {
    //     return null;
    //   }
    //   const EMAIL_REGEXP =
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return EMAIL_REGEXP.test(f.value)
    //     ? null
    //     : {
    //         validateEmail: {
    //           valid: false,
    //         },
    //       };
    // }
  }
}
