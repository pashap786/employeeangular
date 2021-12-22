import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Map<string, Employee> = new Map<string, Employee>([["1", new Employee(1, "1", "2")]]);

  constructor(
    private httpClientService:HttpClientService
  ) { }
  
  ngOnInit(): void {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response: any) {
    console.log(response)
    this.employees=response;
  }

  addWorkDays(event: any, selectedEmployee: any) {
    console.log(selectedEmployee);
  }

}
