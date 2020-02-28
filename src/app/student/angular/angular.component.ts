import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  writeexam()
  {
    this.router.navigate(['studentdashboard/writeexam'])
  }
}
