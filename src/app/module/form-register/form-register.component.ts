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
import { ToastrService } from 'ngx-toastr';
import { FormRegisterService } from 'src/app/services/form-register.service';
import { MailService } from 'src/app/services/mail.service';

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
    private modalService: NgbModal,
    private toastr: ToastrService,
    private mail: MailService
  ) {}
  @ViewChild('saveModal') public saveModal: any; // เรียก Modal login
  provinces: any;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  numberPhone = new FormControl('', [Validators.required]);
  faxNumber = new FormControl('-');
  Province = new FormControl();

  dataSelect = new FormControl();

  // registerForm:FormGroup;

  dataList: Data[] = [];

  submitsResgister() {
    this.formRegisterService
      .UserRegister(
        this.firstName.value,
        this.lastName.value,
        this.Email.value,
        this.numberPhone.value,
        this.faxNumber.value,
        this.dataSelect.value
      )
      .subscribe(
        (result) => {
          if (result) {
            this.mail
              .mailTo({
                user_firstname: this.firstName.value,
                user_lastname: this.lastName.value,
                user_fax: this.faxNumber.value,
                user_county: this.dataSelect.value.province,
                user_email: this.Email.value,
                user_phone: this.numberPhone.value,
              })
              .subscribe((mailResult) => {
                console.log(mailResult);
                this.modalService.open(this.saveModal, { centered: true });
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              });
          } else {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        },
        (err) => {
          if (err.status === 400) {
            this.toastr.warning('มีชื่อผู้ใช้นี้แล้ว', 'แจ้งเตือน');
          }
        }
      );

    this.formRegisterService.getUser().subscribe((Response) => {
      this.user = Response;
      // console.log(this.user);
      this.user[0].user_firstname;
    });
  }

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces'
      )
      .subscribe((response) => {
        this.dataList = response.data;
      });
  }
}
