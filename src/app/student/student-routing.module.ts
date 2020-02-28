import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TaketestComponent } from './taketest/taketest.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { WriteexamComponent } from '../admin/writeexam/writeexam.component';
import { MarksComponent } from '../admin/marks/marks.component';
import { MongodbexamComponent } from '../admin/mongodbexam/mongodbexam.component';
import { ExpressjsexamComponent } from '../admin/expressjsexam/expressjsexam.component';
import { NodejsexamComponent } from '../admin/nodejsexam/nodejsexam.component';


const routes: Routes = [{path:"studentdashboard",component:StudentdashboardComponent,
children:[{path:"taketest",component:TaketestComponent},{path:"angular",component:AngularComponent,},
{path:"mongodb",component:MongodbComponent},
{path:"expressjs",component:ExpressjsComponent},{path:"nodejs",component:NodejsComponent},
{path:"writeexam",component:WriteexamComponent},{path:"marks",component:MarksComponent},
{path:"mongodbexam",component:MongodbexamComponent},{path:"expressjsexam",component:ExpressjsexamComponent},
{path:"nodejsexam",component:NodejsexamComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
