import { HttpClient } from '@angular/common/http';
import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormRegisterService } from 'src/app/services/form-register.service';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.component.html',
  styleUrls: ['./dashboard-customer.component.scss'],
})
export class DashboardCustomerComponent implements OnInit {
  fake_img = ['1.jpg', '2.png', '3.png', '4.png', '5.png', '6.png'];
  constructor(
    private formRegisterService: FormRegisterService,
    private router: Router,
    private http: HttpClient
  ) {}

  title = 'increment-notification';
  notify = false;
  count = 0;

  onSendClick() {
    this.count++;
    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, 300);
  }

  isSuccess: boolean = false;
  

  toggleTag() {
    this.isSuccess = !this.isSuccess;
  }


  totalLength: any;
  page: number = 1;
  user: any;
  showpost: any = [];

  getUser() {
    this.formRegisterService.getUser().subscribe((Response) => {
      this.user = Response;
      console.log(this.user);
      this.totalLength = Response.length;
      // this.user[0].user_firstname;
    });
  }
  getRandom() {
    return this.fake_img[Math.round(Math.random() * 3)];
  }
  ngOnInit(): void {
    this.getUser();
    this.formRegisterService.getUser().subscribe((result) => {
      this.showpost = result;
      this.totalLength = result.length;
      console.log(this.showpost);
    });
  }
}
