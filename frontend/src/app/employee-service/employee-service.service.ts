import { Injectable } from '@angular/core';
import { IEmployee } from '../employee-details/iemployee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeServiceService {

  constructor(private http: Http) { }

  getEmployees(): IEmployee[] {
    return [
      { 'firstName': "rabindra", 'lastName': "patra", 'gender': "female", 'dob': "25/05/1989", 'salary': 2567.89 },

      { 'firstName': "rabindra", 'lastName': "patra", 'gender': "male", 'dob': "25/05/1989", 'salary': 2567.89 },

      { 'firstName': "rabindra", 'lastName': "patra", 'gender': "male", 'dob': "25/05/1989", 'salary': 2567.89 },

      { 'firstName': "rabindra", 'lastName': "patra", 'gender': "male", 'dob': "25/05/1989", 'salary': 2567.89 },

      { 'firstName': "rabindra", 'lastName': "patra", 'gender': "female", 'dob': "25/05/1989", 'salary': 2567.89 }
    ]
  }

  getRealEmployees(): Observable<IEmployee[]> {
    return this.http.get('http://localhost:8080/employees').map((response: Response) => <IEmployee[]>response.json())
      .catch(this.handleError);
  }


  getEmployeeByLastName(empLastName:string): Observable<IEmployee> {
    return this.http.get('http://localhost:8080/employees/'+empLastName).map((response: Response) => <IEmployee[]>response.json())
      .catch(this.handleError);
  }

  handleError(errorResponse: Response) {
    console.log(errorResponse);
    return Observable.throw(errorResponse);
  }

}
