import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionpaperComponent implements OnInit {
file:File

questionpaper:object[]=[]
subject:object={}

  constructor(private hc:HttpClient) { }

  ngOnInit() {
    this.hc.get("admin/getquestionpaper",).subscribe((res)=>{
      this.file=res["message"]    
      console.log(this.file)
    this.questionpaper=this.file["options"]
    console.log("questionpaperdetails",this.questionpaper)   
    })
  }

   incomingfile(event) 
  {
  	this.file= event.target.files[0];
  }

  formData=new FormData()
  questionPaperDetails(data)
  {
   console.log(data)
   this.subject=data
   console.log("subjectdata",this.subject)
   
   	 this.formData.append('excelsheets',this.file,this.file.name);
 
   	 this.formData.append("data",JSON.stringify(data))
     this.hc.post("/admin/questionpaper",this.formData).subscribe((res)=>{
      alert(res["message"])

      
   })
    
  }

  
}
