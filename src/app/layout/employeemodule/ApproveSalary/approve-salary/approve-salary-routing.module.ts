import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApproveSalaryComponent } from './approve-salary.component';

const routes: Routes = [
  {
      path: '', component: ApproveSalaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproveSalaryRoutingModule { }

