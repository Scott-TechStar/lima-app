import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }
  //swiching the login and register buttons
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    //Auth observable variable
    let authObserv: Observable<AuthResData>;
    
    this.isLoading = true;
    //login subscription
    if (this.isLoginMode){
      authObserv = this.authservice.login(email, password);
      //signup subscription
    }else{
      authObserv = this.authservice.signUp(email, password);
    }

    authObserv.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    }, errorMessage =>{
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });
  
    form.reset(); //reset form
  }
}
