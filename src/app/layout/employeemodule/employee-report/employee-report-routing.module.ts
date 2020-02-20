import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeReportComponent } from './employee-report.component';
const routes: Routes = [
  {
      path: '',
      component: EmployeeReportComponent
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
export class EmployeeReportRoutingModule { }
