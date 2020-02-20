import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeattendanceComponent } from './employeeattendance.component';

const routes: Routes = [
  {
      path: '', component: EmployeeattendanceComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

    exports: [RouterModule]
})
export class EmployeeattendanceRoutingModule { }
