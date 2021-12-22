import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{

  constructor(
    public vacationDaysAccumulated:number,
    public nickname:string,
    public id:string
  ) {}

}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }
}
