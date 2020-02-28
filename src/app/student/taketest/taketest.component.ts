import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  angular()
  {
  this.router.navigate(['studentdashboard/angular'])
  }

  mongodb()
  {
    this.router.navigate(['studentdashboard/mongodb'])  
  }

  expressjs()
  {
    this.router.navigate(['studentdashboard/expressjs']) 
  }

  nodejs()
  {
    this.router.navigate(['studentdashboard/nodejs']) 
  }

}
