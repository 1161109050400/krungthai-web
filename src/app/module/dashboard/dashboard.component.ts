import { Component, OnInit } from '@angular/core';
// import { ItemsList } from '@ng-select/ng-select/lib/items-list';
// import { listenerCount } from 'process';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  list = document.querySelectorAll('.list');
  

  constructor() {
  
  }


  ngOnInit(): void {
    
  }


  
}
