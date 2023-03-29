import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
//Sidebar toggle show hide function
status = true;
addToggle()
{
  this.status = !this.status;       
}

onLogin() {
  this.authService.login();
}

onLogout() {
  this.authService.logout();
}
}
