import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  

  logout()
  {
 this.router.navigate(['login'])
  }

}
