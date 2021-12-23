import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-wlanp85',
  templateUrl: './wlanp85.component.html',
  styleUrls: ['./wlanp85.component.scss']
})
export class WLANP85Component implements OnInit {

  constructor(private spinner: NgxSpinnerService) { 
    this.spinner.show();
    setTimeout(() => {
  /** spinner ends after 5 seconds */
    this.spinner.hide();
    }, 3000);

  }

  ngOnInit(): void {
  }

}
