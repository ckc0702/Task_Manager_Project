import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'test'
  password = 'dummy'
  errorMessage = 'Invalid Credentials'
  invalidlogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService
    ,private basicAuthenticationService: BasicAuthenticationService) { //dependency injection 
  }

  ngOnInit(): void {
  }

  //hardcoded auth <<<
  authorizedAccess(){
    //if (this.username==="ckc0" && this.password==="dummy"){
      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidlogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    else{
      this.invalidlogin = true;
    }
  }

  //basic auth <<<
  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
        data => {
          console.log(data)
          this.invalidlogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error)
          this.invalidlogin = true
        }
      )
  }

  //jwt auth <<<
  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
        data => {
          console.log(data)
          this.invalidlogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error)
          this.invalidlogin = true
        }
      )
      
  }
}
