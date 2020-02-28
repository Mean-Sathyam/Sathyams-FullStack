import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  writeexam4()
  {
    this.router.navigate(['studentdashboard/nodejsexam'])
  }

}
