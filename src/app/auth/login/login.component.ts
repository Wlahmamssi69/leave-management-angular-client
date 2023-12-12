import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthControllerService, AuthenticationRequest} from "../../../../generated-angular-services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  loginFailed:boolean = false;
  loginRequest?:AuthenticationRequest
  constructor(private authService: AuthControllerService,private router:Router){}
  ngOnInit(): void {

    this.loginForm=new FormGroup({
      email :new FormControl('',[Validators.required,Validators.email]),
      password :new FormControl('',Validators.required)
    })
  }

  login() {

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const loginRequest: AuthenticationRequest = {
      email: email,
      password: password
    };

    this.authService.authenticate(loginRequest).subscribe(
      data=>{
            this.loginFailed=false;
          console.log(data);
         this.router.navigateByUrl('/dashboard');



      },error => {
        this.loginFailed=true;
        console.log("authentication failed");

      });
  }
}
