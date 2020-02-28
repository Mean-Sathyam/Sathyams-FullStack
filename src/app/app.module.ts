import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthorizationService } from './authorization.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    StudentModule,
    AdminRoutingModule,
    StudentRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthorizationService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
