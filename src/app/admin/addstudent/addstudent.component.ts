import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
addstudent:object[]=[]

editObject:any={
  batchname: '',
  studentid:'',
  username:'',
  email:'',
  phoneno:'',
  select:'',
  address:'',
  radio:'',
}
  constructor(private hc:HttpClient) { }

  ngOnInit() {
   this.getallstudent()
  }

  getallstudent()
  {
    this.hc.get("/admin/getallstudents").subscribe((res)=>{
      this.addstudent=res["message"]
      console.log("get request handler",res['message']);
      
    })
  }

  submitdetails(data)
  {
    console.log("registration details",data)
    // this.addstudent.push(data)
    this.hc.post("/admin/register",data).subscribe((res)=>{
      alert(res["message"]);
      this.getallstudent();
    })
    
     
  }

  editobj(obj)
  {
    console.log(obj)
//     let tem = this.addstudent.filter((studentObj)=>{
//       return studentObj['studentid'] === obj
//     })
//     this.currentStudent = tem[0]
// console.log(this.currentStudent);

this.editObject = obj;

  }

  delete(data)
  {
  console.log(this.addstudent)
  this.addstudent=data
  this.addstudent.splice(0,1)
  }
  

  updateform(data)
  {
    console.log(data);
    this.hc.put("/admin/updatestudentdetails",data).subscribe((res)=>{
      alert(res["message"]);
      this.getallstudent()
    })
  }

}
