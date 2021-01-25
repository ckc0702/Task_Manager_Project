import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/data/register.service';

export class User{
  constructor(
    public username: String,
    public password: String,
  ){}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;
  inserted_username!: String;
  inserted_password!: String;

  constructor(
    private registerService:RegisterService
  ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user = new User(this.inserted_username, this.inserted_password);

    this.registerService.createUser(this.user).subscribe(
      response=> {
        console.log(response);
      }
    )
  }

}
