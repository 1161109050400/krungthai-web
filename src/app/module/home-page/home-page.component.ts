import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  navActive = false;
  ngOnInit(){
    AOS.init(
      {
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 1000 // values from 0 to 3000, with step 50ms
      }

    );
  }
  
  toggleMenu() {
    this.navActive = !this.navActive;
  }


}
