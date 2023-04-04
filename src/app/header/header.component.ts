import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  LoggedIn = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }
  onLogin() {
    this.authService.login();
    this.status = true;
  }
  onLogout() {
    this.authService.logout();
    this.status = false;
    this.router.navigate(['/']);
  }

}
