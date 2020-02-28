import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  writeexam3()
  {
    this.router.navigate(['studentdashboard/expressjsexam'])
  }

}
