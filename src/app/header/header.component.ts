import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { StorageService } from '../auth/storage.service';
import { EventBusService } from '../shared/event-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public roles: string[] = [];
  isLoggedIn = false;
  admin = false;
  dealer = false;
  username?: string;
  role = '';
 
 eventBusSub?: Subscription;
 
  constructor(
  private router: Router, 
  private authService: AuthService,
  private storageService: StorageService,
  private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.role = user.roles;

      this.admin = this.roles.includes('ADMIN');
      this.dealer = this.roles.includes('DRIVER');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
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
  onSignUp() {
    this.router.navigate(['/register'])
    
  }
  
  //logout
    logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
