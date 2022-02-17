import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar-backend',
  templateUrl: './sidebar-backend.component.html',
  styleUrls: ['./sidebar-backend.component.scss']
})
export class SidebarBackendComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
