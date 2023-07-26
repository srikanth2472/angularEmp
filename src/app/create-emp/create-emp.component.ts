import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeSerService } from '../employee-ser.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit{

emp1:Employee= new Employee();

  constructor(private es:EmployeeSerService,private rou:Router){

  }

ngOnInit(): void {
  
}

saveEmp(){
  this.es.createEmp(this.emp1).subscribe( data =>{
    console.log(data);
    this.gotoEmplist();
  },
 error =>{
  console.log(error);
 } )
}

gotoEmplist(){
this.rou.navigate(['emp']);
}

onSubmit(){
 this.saveEmp();
}

gotoback(){
  this.gotoEmplist();
}

}
