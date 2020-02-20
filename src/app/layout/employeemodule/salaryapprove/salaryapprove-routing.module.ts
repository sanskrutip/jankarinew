import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalaryapproveComponent } from './salaryapprove.component';

const routes: Routes = [
  {
      path: '', component:  SalaryapproveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SalaryapproveRoutingModule { }

