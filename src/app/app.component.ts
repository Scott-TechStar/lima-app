import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoggedIn = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  }
  
}
