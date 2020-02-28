import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodejsexam',
  templateUrl: './nodejsexam.component.html',
  styleUrls: ['./nodejsexam.component.css']
})
export class NodejsexamComponent implements OnInit {
  public startCountdown: string;
  nodejs:object[]=[]
  public performance = {};
  public answers = [];
  public wrongAns = 0;
  public attemptQuestion = 0;
  public totalScore = 0;
  public right: boolean = false;
  public wrong: boolean = false;
  public notAttempted: boolean = false;

  @ViewChild("divClick", { static: false }) divClick: ElementRef<HTMLElement>;

  constructor(private hc:HttpClient,private router:Router) { }

  ngOnInit() {
    this.hc.get("/student/nodejsquestionpaper/5").subscribe((res)=>{
      this.nodejs=res["message"] 
      console.log(this.nodejs)

      this.startTimer(10);
})


  }

  submitAnswers (ansObj3)
  {
    console.log(ansObj3);
    let answers = Object.keys(ansObj3)
    console.log(answers);
    console.log(ansObj3);
    
    for(let i in answers) {
      
      
      this.nodejs[i]['givenAns'] = ansObj3[answers[i]]
    }
 
    this.nodejs.forEach(ansObj3 => {
      if (ansObj3["givenAns"] !== "") {
        this.attemptQuestion++;
        if (ansObj3["givenAns"] === ansObj3["correctanswer"]) {
          this.totalScore++;
          this.right = true;
        } else {
          this.wrongAns++;
          this.wrong = true;
        }
      }
    });
    
    
  }

  startTimer(time) {
    // Set the date we're counting down to
    let currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + time);
    let countDownDate = currentTime.getTime();

    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for hours, minutes and seconds
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (time > 60) {
        this.startCountdown = hours + " : " + minutes + " : " + seconds;
      } else {
        this.startCountdown = minutes + " : " + seconds;
      }

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x)
        this.startCountdown = "Time Out";
        alert("Time Out");
        this.divClick.nativeElement.click();
      }
    }, 1000);
    x;
  }


}
