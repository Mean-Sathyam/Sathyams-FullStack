import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  writeexam1()
  {
    this.router.navigate(['studentdashboard/mongodbexam'])
  }

}
