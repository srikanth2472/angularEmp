import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfEmpComponent } from './list-of-emp/list-of-emp.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewEmComponent } from './view-em/view-em.component';

const routes: Routes = [
  {path:'emp' , 
  component:ListOfEmpComponent
},
  {path:'create-emp', 
  component:CreateEmpComponent
},
  {path:'',redirectTo:'emp',
  pathMatch:'full'},
  {
    path:'update-emp/:id',
    component:UpdateEmpComponent
  },
  {
    path:'view-emp/:id',
    component:ViewEmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
