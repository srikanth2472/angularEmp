import { NgModule   } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfEmpComponent } from './list-of-emp/list-of-emp.component';
import { HttpClientModule } from '@angular/common/http' 
import { EmployeeSerService } from './employee-ser.service';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewEmComponent } from './view-em/view-em.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmpComponent,
    CreateEmpComponent,
    UpdateEmpComponent,
    ViewEmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
