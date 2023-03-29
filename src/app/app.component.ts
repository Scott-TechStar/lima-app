import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoggedIn = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  onLogin() {
    this.authService.login();
    this.LoggedIn = true;
  }
  onLogout() {
    this.authService.logout();
    this.LoggedIn = false;
    this.router.navigate(['/']);
  }
}
