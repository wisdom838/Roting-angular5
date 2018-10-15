import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
// import { Location } from '@angular/common';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @ViewChild('loginForm')

  public username:string;

  public password:string;

  loginForm:FormGroup;

  constructor(public formBuilder:FormBuilder, public router:Router) { 
this.loginForm=formBuilder.group(
  { 
username:new FormControl("",[Validators.required]),
password:new FormControl("",[Validators.required])
}
)
  }

  ngOnInit() {
  }

  postdata(data){
    console.log(data)
    if( (data.username="kumar838") && (data.password="12345") ){
      localStorage.setItem('username',data.username);
      localStorage.setItem('password', data.password);

      // this.router.navigate(['user', {data: data.username}]);    // o/p: http://localhost:4201/user;data=kumar838
      // this.router.navigate(['user', data]);    // o/p:  http://localhost:4201/user;username=kumar838;password=12345
      // this.router.navigate(['admin/30/' + JSON.stringify(data)]);  // http://localhost:4201/admin/30/%7B%22username%22:%22kumar838%22,%22password%22:%2212345%22%7D
      
      this.router.navigateByUrl('/admin/30');
       //location.reload();
     }
  }


}
