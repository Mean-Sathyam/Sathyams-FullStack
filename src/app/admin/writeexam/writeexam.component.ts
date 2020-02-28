import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-writeexam',
  templateUrl: './writeexam.component.html',
  styleUrls: ['./writeexam.component.css']
})
export class WriteexamComponent implements OnInit {
public startCountdown: string;
angular:object[]=[];
id:string;
public performance = {};
  public answers = [];
  public wrongAns = 0;
  public attemptQuestion = 0;
  public totalScore = 0;

  public right: boolean = false;
  public wrong: boolean = false;
  public notAttempted: boolean = false;

@ViewChild("divClick", { static: false }) divClick: ElementRef<HTMLElement>;
  constructor(private router:Router,private hc:HttpClient) { }

  ngOnInit() {

    this.hc.get("/student/angularquestionpaper/2").subscribe((res)=>{
            this.angular=res["message"].options;
            this.id = res['message'].questionpaperid;
            console.log(this.id)
            console.log(this.angular)

            this.startTimer(10);
    })


  }

  submitAnswers(ansObj){

    let answers = Object.keys(ansObj)
    console.log(answers);
    console.log(ansObj);
    
    for(let i in answers) {
      
      
      this.angular[i]['givenAns'] = ansObj[answers[i]]
    }
 
    this.angular.forEach(ansObj => {
      if (ansObj["givenAns"] !== "") {
        this.attemptQuestion++;
        if (ansObj["givenAns"] === ansObj["correctanswer"]) {
          this.totalScore++;
          this.right = true;
        } else {
          this.wrongAns++;
          this.wrong = true;
        }
      }
    });
    
    
  }

  marks()
  {
    
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
