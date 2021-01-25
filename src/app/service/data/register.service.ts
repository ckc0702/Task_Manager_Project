import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { User } from 'src/app/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http:HttpClient
  ) { }

  createUser(user:User){
    return this.http.post(`${TODO_JPA_API_URL}/register`
                        , user);
  }
}
