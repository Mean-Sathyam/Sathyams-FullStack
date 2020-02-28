import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-expressjsexam',
  templateUrl: './expressjsexam.component.html',
  styleUrls: ['./expressjsexam.component.css']
})
export class ExpressjsexamComponent implements OnInit {
  public startCountdown: string;
  expressjs:object[]=[]
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
    this.hc.get("/student/expressjsquestionpaper/4").subscribe((res)=>{
      this.expressjs=res["message"] 
      console.log(this.expressjs)

      this.startTimer(10);
})


  }


  submitAnswers(ansObj2)
  {
    console.log(ansObj2);
    let answers = Object.keys(ansObj2)
    console.log(answers);
    console.log(ansObj2);
    
    for(let i in answers) {
      
      
      this.expressjs[i]['givenAns'] = ansObj2[answers[i]]
    }
 
    this.expressjs.forEach(ansObj2 => {
      if (ansObj2["givenAns"] !== "") {
        this.attemptQuestion++;
        if (ansObj2["givenAns"] === ansObj2["correctanswer"]) {
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
