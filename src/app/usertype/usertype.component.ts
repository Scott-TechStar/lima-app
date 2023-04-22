import { Component, OnInit } from '@angular/core';
import {  fromEvent, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})



export class UsertypeComponent implements OnInit {

  constructor() { }
  
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  
  
  

  ngOnInit() {
  this.resizeObservable$ = fromEvent(window, 'resize');
  this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
  	
  });
  
  }
  
  ngOnDestroy(){
  	this.resizeSubscription$.unsubscribe();
  }

}
