import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { BranchComponent } from './branch/branch.component';


const routes: Routes = [{path:"admindashboard",component:AdmindashboardComponent,
children:[{path:"addquestionpaper",component:QuestionpaperComponent},
{path:"addbatch",component:BranchComponent},{path:"addstudent",component:AddstudentComponent},
{path:"",redirectTo:"addbatch",pathMatch:"full"}]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AdminRoutingModule { }
