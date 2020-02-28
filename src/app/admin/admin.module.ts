import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { BranchComponent } from './branch/branch.component';
import { WriteexamComponent } from './writeexam/writeexam.component';
import { MarksComponent } from './marks/marks.component';
import { MongodbexamComponent } from './mongodbexam/mongodbexam.component';
import { ExpressjsexamComponent } from './expressjsexam/expressjsexam.component';
import { NodejsexamComponent } from './nodejsexam/nodejsexam.component';



@NgModule({
  declarations: [AdmindashboardComponent, QuestionpaperComponent, AddstudentComponent, BranchComponent, WriteexamComponent, MarksComponent, MongodbexamComponent, ExpressjsexamComponent, NodejsexamComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
