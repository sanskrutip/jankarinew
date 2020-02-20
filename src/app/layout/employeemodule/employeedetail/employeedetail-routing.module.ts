import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailComponent } from './employeedetail.component';

const routes: Routes = [
  {
      path: '',
      component: EmployeedetailComponent
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
export class EmployeedetailRoutingModule { }

