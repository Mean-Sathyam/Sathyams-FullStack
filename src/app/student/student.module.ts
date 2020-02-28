import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { StudentRoutingModule } from './student-routing.module';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TaketestComponent } from './taketest/taketest.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';


@NgModule({
  declarations: [StudentdashboardComponent, TaketestComponent, AngularComponent, MongodbComponent, ExpressjsComponent, NodejsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
