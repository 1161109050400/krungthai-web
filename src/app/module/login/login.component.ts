import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}
  _beforeLogin() {
    this.loginService.login(this.username.value, this.password.value).subscribe((result) => {
      console.log(result);
      // alert('Login Successfully');
      this.router.navigate(['krungthai/dashboard']);
      if (Response) {
        this.modalService.open(this.login, { centered: true });
        // this.login.open();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },err=>{
      if(err.status===403){
        alert('ชื่อผู้ใช้หรือรหัสผิดไงไอสัส!');
      }
    });
  }
}
