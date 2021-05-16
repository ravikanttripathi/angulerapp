import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   basePath:string='http://localhost:9090/FormApplicationUsingSTl//restemp/employee';
  constructor(private http:HttpClient) { }
  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.basePath}/all`);
  }
  deleteEmployee(id:number):Observable<any>{
      return this.http.delete(`${this.basePath}/remove/${id}`,{responseType :'text'});
  }
  createEmployee(employee:Employee):Observable<any>{
    return this.http.post(`${this.basePath}/save`,employee,{responseType:'text'});
  }
  getOneEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.basePath}/one/${id}`);
  }
  updateEmployee(emplyee:Employee):Observable<any>{
    return this.http.put(`${this.basePath}/update`,emplyee,{responseType : 'text'})
  }
}
