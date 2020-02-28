import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let token=localStorage.getItem("token")
    if(token)
    {
      const clonedRequestObject=req.clone({
        headers:req.headers.set("authorization","Bearer "+token)
      })
      return next.handle(clonedRequestObject)
    }
    else{
      return next.handle(req);
    }
  }
}