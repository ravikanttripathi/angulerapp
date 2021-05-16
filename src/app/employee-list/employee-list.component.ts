import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee:Employee[];
  message:any;
  constructor(private service: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.service.getAllEmployee().subscribe(
      data=>{
            this.employee=data;
      },
      error=>{
        console.log(error);
      }
    );
  }
  deleteEmployee(id:number){
    console.log('Deleted '+id);
    this.service.deleteEmployee(id).subscribe(
      data =>{
        console.log(data);
        this.message=data
        this.getAllEmployee();
      },
      error =>{
        console.log(error);
      }
    );
  }
    showEdit(id:number){
     this.router.navigate(['edit',id]);
    }
}
