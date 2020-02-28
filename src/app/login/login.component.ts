import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private hc:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  getdetails(data)
  {
   console.log(data)
   if(data.role=="admin")
   {
     
     this.hc.post("admin/login",data).subscribe((res)=>{
       if(res["message"]=="logged in successfully")
        this.router.navigate(['admindashboard'])
        alert(res["message"])  
     })
   }
 
  

   if(data.role=="student")
   {
    this.hc.post("/student/login",data).subscribe((res)=>{
      if(res["message"]=="logged in successfully")
      {
      
        this.router.navigate(['studentdashboard'])
         alert(res["message"])
         localStorage.setItem("token", res["token"]);
         localStorage.setItem("username", res["username"]);
       }

                
    
    })
     
   }

  }

}
