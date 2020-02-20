import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeleavelistComponent } from './employeeleavelist.component';
const routes: Routes = [
  {
      path: '',
      component: EmployeeleavelistComponent
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
export class EmployeeleavelistRoutingModule { }
