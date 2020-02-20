import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalarySlipComponent } from './salary-slip.component';


const routes: Routes = [
  {
      path: '', component:  SalarySlipComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalarySlipRoutingModule { }

