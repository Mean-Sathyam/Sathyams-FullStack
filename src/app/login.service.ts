import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient,router:Router) { }

  login(obj)
  {
    if(obj=="admin")
    {
      return this.hc.post("/admin/login",obj)
    }

    if(obj=="student")
    {
      return this.hc.post("/student/login",obj)
    }

  }

  IsLoggedIn()
  {
    let token=localStorage.getItem("token")
    if(token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

}
