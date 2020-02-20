import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalarylistComponent } from './salarylist.component';

const routes: Routes = [
  {
      path: '', component:  SalarylistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalarylistRoutingModule { }
