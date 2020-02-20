import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpsalaryComponent } from './add-edit-empsalary.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: AddEditEmpsalaryComponent
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
export class AddEditEmpsalaryRoutingModule { }
