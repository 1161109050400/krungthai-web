import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Request } from '../../interface/request';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('login') public login: any; // เรียก Modal login

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.checkLogin();
  }

  email = new FormControl();
  password = new FormControl();
  checkLogin() {
    if (this.authService.IsLoggedIn()) {
      console.log('logined..');
      this.router.navigate(['dashboard-chart']);
    }
  }
  logIn() {
    this.authService.login(this.email.value, this.password.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.toastr.success('เข้าสู่ระบบสำเร็จ', 'แจ้งเตือน');
        this.router.navigate(['/dashboard-chart']);
      },
      (err) => {
        if (err.status === 403) {
          this.toastr.warning(
            'ชื่อผู้ใช้งานหรือรหัสผ่านผิด กรุณากรอกใหม่ค่ะ',
            'แจ้งเตือน'
          );
        } else {
          this.toastr.error(
            'ไม่ได้ลงทะเบียนอีเมล กรุณาสมัครสมาชิก !',
            'แจ้งเตือน'
          );
        }
      }
    );
  }
}
