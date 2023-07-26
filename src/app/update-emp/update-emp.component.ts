import { Component,OnInit } from '@angular/core';
import { EmployeeSerService } from '../employee-ser.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {


  id : Number=0
  emp1: Employee = new Employee();
  

  constructor(private es:EmployeeSerService, private ac:ActivatedRoute,private rou:Router){

  }

ngOnInit(): void {
this.id = this.ac.snapshot.params['id'];
this.es.getEmployeByid(this.id).subscribe(
  data =>{
    this.emp1=data
  },
  error =>{
    console.log(error)
  }
);

}


onSubmit(){

  this.saveEmp()
}
saveEmp(){

  this.es.upadateEmp(this.id,this.emp1).subscribe(
    data =>{
     console.log(data)
     this.gotoEmplist()
    }
  )

}

gotoEmplist(){
  this.rou.navigate(['emp']);
  }

  gotoback(){
    this.gotoEmplist()
  }

}
