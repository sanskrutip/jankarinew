import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { EmployeemenuComponent } from './employeemenu.component';
const routes: Routes = [
  {
      path: '',
      component: EmployeemenuComponent
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
export class EmployeemenuRoutingModule { }

