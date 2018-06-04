import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/Http';
import { IEmployee } from '../employee-details/iemployee';
import { EmployeeServiceService } from '../employee-service/employee-service.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  
})

export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeServiceService) {
   // this.employees = this.employeeService.getEmployees();
  }

  statusMessage: string;
  ngOnInit() {
    this.employeeService.getRealEmployees()
      .subscribe((employeeList) => this.employees = employeeList, (error) => { this.statusMessage = 'Something went wrong!!';  });
  }

  employees: IEmployee[]=[];

  getAllEmployeeCount(): number {
    return this.employees.length;
  }

  getMaleCount(): number {
    return this.employees.filter(e => e.gender === 'male').length;
  }

  getFemaleCount(): number {
    return this.employees.filter(e => e.gender === 'female').length;
  }

  selectedGenderBtnActionValue: string = "all";

  onChangeSelectedGenderBtnActionValue(genderBtnValueEvent: string) {
    this.selectedGenderBtnActionValue = genderBtnValueEvent;
    console.log(this.selectedGenderBtnActionValue);
  }
}
