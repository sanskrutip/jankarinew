import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalarySlipStatusComponent } from './salary-slip-status.component';

const routes: Routes = [
  {
      path: '', component:  SalarySlipStatusComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalarySlipStatusRoutingModule { }
