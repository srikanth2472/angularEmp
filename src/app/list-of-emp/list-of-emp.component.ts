import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeSerService } from '../employee-ser.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-list-of-emp',
  templateUrl: './list-of-emp.component.html',
  styleUrls: ['./list-of-emp.component.css']
})
export class ListOfEmpComponent implements OnInit{

  
employee:Employee[]=[];

count:Number=0
 constructor(private empser:EmployeeSerService,private rou:Router){

 }

  ngOnInit(): void {
   this.getallEmp()
  }

private getallEmp(){
  this.empser.getAllemp().subscribe( data => {
    this.employee = data
    this.count=this.employee.length
  })
}

updateEmp(id:Number){
this.rou.navigate(['update-emp',id])
}

deleteEmp(id:Number){
  if(confirm("are you suie ")){
    this.empser.delteEmp(id).subscribe(
      data =>{
         //console.log(data);
        this.getallEmp()
      }
    )
  }

}

viewEmp(id:Number){
  this.rou.navigate(['view-emp',id])
}


}
