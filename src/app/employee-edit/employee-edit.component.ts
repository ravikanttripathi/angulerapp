import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
    employee:Employee=new Employee();
    id:number;
  constructor(private service:EmployeeService,private activateRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.params['id'];
    this.service.getOneEmployee(this.id).subscribe(
      data=>{
        this.employee=data;
      }
    );
  }
  updateEmployee(){
    this.service.updateEmployee(this.employee).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['all']);
      }
    );
  }
}
