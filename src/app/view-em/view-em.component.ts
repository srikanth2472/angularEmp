import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeSerService } from '../employee-ser.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-em',
  templateUrl: './view-em.component.html',
  styleUrls: ['./view-em.component.css']
})
export class ViewEmComponent implements OnInit {

  id:Number=0
  emp: Employee = new Employee(); 
  constructor(private ac:ActivatedRoute,private es:EmployeeSerService){

  }

  ngOnInit(): void {
    
    this.id=this.ac.snapshot.params['id']

    this.es.getEmployeByid(this.id).subscribe(
         data =>
         this.emp=data

    )


  }


}
