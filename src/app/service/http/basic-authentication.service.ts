import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';

export const TOKEN = 'token'
export const AUTH_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  //hardcoded auth <<<
  // authenticate(username: string, password: string){
  //   if (username==="ckc0" && password==="dummy"){
  //     sessionStorage.setItem('authenticaterUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  //basic auth <<<
  executeAuthenticationService(username: string, password: string){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`
    ,{headers}).pipe(
      map(
        (data: any) => {
            sessionStorage.setItem(AUTH_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
      )
    );
  }

  //jwt auth <<<
  executeJWTAuthenticationService(username: any, password: any){

    console.log('', username);
    console.log('', password);

    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
      map(
        (data: any) => {
            sessionStorage.setItem(AUTH_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
      )
    );
  }


    //utilities
    getAuthenticatedUser(){
      return sessionStorage.getItem(AUTH_USER)
    }

    getAuthenticatedToken(){
      //if(this.getAuthenticatedUser())
        return sessionStorage.getItem(TOKEN)
    }

    isUserLoggedIn(){
      let user = sessionStorage.getItem(AUTH_USER)
      return !(user === null) 
      //return true;
    }

    logout(){
      sessionStorage.removeItem(AUTH_USER)
      sessionStorage.removeItem(TOKEN)
    }
}

export class AuthenticationBean{
  constructor(public message:string){
  }
}
