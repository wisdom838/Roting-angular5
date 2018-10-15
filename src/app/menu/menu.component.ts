import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:any=30;
  login:any;
  
  constructor() {
     }

  ngOnInit() {
       this.islogeedin();
  }

islogeedin(){
       this.login=localStorage.getItem('username');
 }


}

// https://stackoverflow.com/questions/44069004/angular-2-after-successful-login-change-my-login-component-in-header-to-user