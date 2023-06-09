import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  feeds = false;
  medic = false;
  house = false;
  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }
  showFeeds(){
    this.feeds = true;
    //this.router.navigate(['feeding']);
  }

 onLogin() {
   // this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
