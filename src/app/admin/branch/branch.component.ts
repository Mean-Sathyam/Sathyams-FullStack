import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
branch:object[]=[];

  constructor(private hc:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getAllBatches();
  }

  getAllBatches(){
    this.hc.get("/admin/getbatchdetails").subscribe((res)=>{
      this.branch=res["message"]
      console.log(this.branch)
    })
  }
  addbatch(data)
  {

    // console.log(data)
    // this.branch.push(data)
    

    this.hc.post("/admin/batchdetails",data).subscribe((res)=>{
      alert(res["message"]);
      this.getAllBatches();
    })

    
  }
  
//   addstudent()
//   {
//     console.log("hiiii....");
    
// this.router.navigate(['addstudent']);
//   }

navigateStudentpage(){

  this.router.navigate(['admindashboard/addstudent']);
}
 
}
