import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-backend',
  templateUrl: './sidebar-backend.component.html',
  styleUrls: ['./sidebar-backend.component.scss']
})
export class SidebarBackendComponent implements OnInit {

  list = document.querySelectorAll('.list');
  constructor() { }

  ngOnInit(): void {
  }

}
