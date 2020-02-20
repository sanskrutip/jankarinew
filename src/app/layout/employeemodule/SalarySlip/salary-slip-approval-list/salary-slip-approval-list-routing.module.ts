import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalarySlipApprovalListComponent } from './salary-slip-approval-list.component';

const routes: Routes = [
  {
      path: '', component:  SalarySlipApprovalListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalarySlipApprovalListRoutingModule { }

