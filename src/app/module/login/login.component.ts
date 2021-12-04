import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('login') public login: any; // เรียก Modal login
  username = new FormControl();
  password = new FormControl();
  // login: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  _beforeLogin() {
    this.loginService.login(this.username.value, this.password.value).subscribe(
      (result) => {
        console.log(result);
        // alert('Login Successfully');
        this.toastr.success('เข้าสู่ระบบสำเร็จ','แจ้งเตือน');
        this.router.navigate(['krungthai/dashboard-chart']);
        // if (Response) {
        //   this.modalService.open(this.login, { centered: true });
        //   // this.login.open();
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 1000);
        // } else {
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 1000);
        // }
      },
      (err) => {
        if (err.status === 403) {
          // alert('ชื่อผู้ใช้งานหรือรหัสผ่านผิด กรุณากรอกใหม่ค่ะ ');
          this.toastr.warning('ชื่อผู้ใช้งานหรือรหัสผ่านผิด กรุณากรอกใหม่ค่ะ','แจ้งเตือน');
        } else {
          this.toastr.warning('','ERROR');
          // alert('บัค!');
        }
      }
    );
  }
}
