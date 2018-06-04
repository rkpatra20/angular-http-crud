import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { EmployeeServiceService } from './employee-service/employee-service.service'

const appRoutes: Routes= [
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'employees/:lastName',component:EmployeeDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeActionComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
