import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
   employee:Employee =new Employee();
   message:any;
  constructor(private service:EmployeeService,private router:Router) { }
  ngOnInit(): void {
    this.employee=new Employee();
  }
 createEmployee(){
   this.service.createEmployee(this.employee).subscribe(
     data=>{
       console.log(data);
       this.message=data;
        this.employee=new Employee();
     },
     error =>{
          console.log(error);
     }
   );
 }
}
