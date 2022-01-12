import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-wlanp85',
  templateUrl: './wlanp85.component.html',
  styleUrls: ['./wlanp85.component.scss']
})
export class WLANP85Component implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    AOS.init(
      {
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 1000 // values from 0 to 3000, with step 50ms
      }

    );
  }

}
