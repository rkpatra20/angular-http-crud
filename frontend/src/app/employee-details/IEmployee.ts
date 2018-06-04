export interface IEmployee {
    firstName: string;
    lastName: string;
    salary: number;
    dob: string;
    gender: string;

   // city?:string;
  //  findMonthlySalary(annualSalary: number): number;
}
/*
export class Employee implements IEmployee {
    constructor(public firstName: string,
        public lastName: string,
        public salary: number,
        public dob: string,
        public gender: string) { }

    findMonthlySalary(annualSalary: number) {
        return annualSalary / 12;
    }
}
*/