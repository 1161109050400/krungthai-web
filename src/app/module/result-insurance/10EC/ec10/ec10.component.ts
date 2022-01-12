import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ec10',
  templateUrl: './ec10.component.html',
  styleUrls: ['./ec10.component.scss']
})
export class Ec10Component implements OnInit {

  constructor() { }

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
