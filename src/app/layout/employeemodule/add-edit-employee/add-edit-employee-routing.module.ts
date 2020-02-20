import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmployeeComponent } from './add-edit-employee.component';


const routes: Routes = [
  {
      path: '',
      component: AddEditEmployeeComponent
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
export class AddEditEmployeeRoutingModule { }
