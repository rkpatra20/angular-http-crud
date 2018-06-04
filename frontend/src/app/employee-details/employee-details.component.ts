import { Component, OnInit } from '@angular/core';
import { IEmployee } from './iemployee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let lastName: string = this.activatedRoute.snapshot.params['lastName'];
    this.employeeService.getEmployeeByLastName(lastName).subscribe(
      (employeeData) => { if (employeeData.lastName == null) 
        { this.statusMessage = 'Employee Not Found with the given lastName'; }
         else { this.employee = employeeData;this.statusMessage=null; } },
      (error) => { this.statusMessage = 'Unknown Error Occured'; })
  }

  statusMessage: string = 'Loading data..';
  employee: IEmployee;



}
