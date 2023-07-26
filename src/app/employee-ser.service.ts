import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSerService {

  private baseURL="http://localhost:8080/api/v1/emp"

  constructor(private httpclient:HttpClient) { }
 
  getAllemp() : Observable<Employee[]>{

    return this.httpclient.get<Employee[]>(this.baseURL);

  }
  
  createEmp( emp:Employee):Observable<Object>{
    return this.httpclient.post(this.baseURL+'/create',emp)

  }

  getEmployeByid(id:Number):Observable<Employee>{

    return this.httpclient.get<Employee>(`${this.baseURL}/${id}`)
  }


  upadateEmp(id:Number , emp :Employee):Observable<Object>{
      return this.httpclient.put<object>(`${this.baseURL}/${id}`, emp)
  }

     delteEmp(id:Number):Observable<Object>{
       return this.httpclient.delete<Object>(`${this.baseURL}/${id}`)
            }

}
